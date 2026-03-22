'use client';

import { useState, useEffect, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Send, User, ChefHat, ArrowLeft, MessageSquare } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  raw: string;
}

function RecipeCard({ recipe, onBack }: { recipe: Recipe; onBack?: () => void }) {
  if (!recipe.raw) return null;

  return (
    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto w-full">
      {onBack && (
        <button 
          onClick={onBack}
          className="md:hidden flex items-center gap-2 text-purple-600 font-bold mb-2 p-2 bg-purple-50 rounded-xl w-fit"
        >
          <ArrowLeft size={20} /> Back to Chat
        </button>
      )}
      
      <div className="bg-[#fff9e6] text-slate-800 rounded-2xl overflow-hidden shadow-xl border border-amber-200/50">
        {/* Header */}
        <div className="bg-[#f2a93b] p-6 text-black border-b-2 border-orange-200">
          <h2 className="text-2xl font-bold text-center italic tracking-tight">{recipe.title}</h2>
        </div>
        
        <div className="p-6 md:p-10 space-y-10">
          {/* Ingredients */}
          {recipe.ingredients.length > 0 && (
            <div>
              <h3 className="text-lg font-bold border-b-2 border-orange-200 pb-2 mb-4 text-orange-800 uppercase text-center">Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-snug">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions */}
          {recipe.instructions.length > 0 && (
            <div>
              <h3 className="text-lg font-bold border-b-2 border-orange-200 pb-2 mb-4 text-orange-800 uppercase text-center">Instructions</h3>
              <div className="space-y-4">
                {recipe.instructions.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-400 text-white flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CreateContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [lastResult, setLastResult] = useState<Recipe>({
    title: '',
    ingredients: [],
    instructions: [],
    tips: [],
    raw: ''
  });
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuery && messages.length === 0) {
      handleSendMessage(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const parseAIResponse = (text: string) => {
    const lines = text.split('\n');
    let currentSection = '';
    const ingredients: string[] = [];
    const instructions: string[] = [];
    const tips: string[] = [];
    let title = '';

    const ingredientHeaders = /ingredients|what you'll need|shopping list/i;
    const instructionHeaders = /instructions|steps|directions|how to make|preparation/i;
    const tipHeaders = /tips|notes|suggestions|variations/i;

    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      if (!title && (trimmedLine.startsWith('#') || trimmedLine.toLowerCase().startsWith('recipe:'))) {
        title = trimmedLine.replace(/^#+\s*|recipe:\s*/i, '').trim();
        return;
      }

      if (ingredientHeaders.test(trimmedLine) && trimmedLine.length < 40) {
        currentSection = 'ingredients';
      } else if (instructionHeaders.test(trimmedLine) && trimmedLine.length < 40) {
        currentSection = 'instructions';
      } else if (tipHeaders.test(trimmedLine) && trimmedLine.length < 40) {
        currentSection = 'tips';
      } else {
        const isListItem = /^[-*•]\s+/.test(trimmedLine) || /^\d+\.\s+/.test(trimmedLine);
        
        if (currentSection === 'ingredients' && (isListItem || trimmedLine.length > 0)) {
          ingredients.push(trimmedLine.replace(/^[-*•]\s*|^\d+\.\s*/, ''));
        } else if (currentSection === 'instructions' && (isListItem || trimmedLine.length > 0)) {
          instructions.push(trimmedLine.replace(/^[-*•]\s*|^\d+\.\s*/, ''));
        } else if (currentSection === 'tips' && (isListItem || trimmedLine.length > 0)) {
          tips.push(trimmedLine.replace(/^[-*•]\s*|^\d+\.\s*/, ''));
        }
      }
    });

    if (!title && lines.length > 0) {
      title = lines.find(l => l.trim().length > 0)?.trim() || 'Generated Recipe';
    }

    return { 
      title: title || 'Generated Recipe', 
      ingredients: ingredients.filter(i => i.length > 2), 
      instructions: instructions.filter(i => i.length > 2), 
      tips: tips.filter(i => i.length > 2), 
      raw: text 
    };
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      });

      const data = await response.json();
      if (data.text) {
        const recipe = parseAIResponse(data.text);
        const isRecipe = recipe.ingredients.length > 0 || recipe.instructions.length > 0;
        
        const assistantMessage: Message = { 
          role: 'assistant', 
          content: isRecipe 
            ? "I've created your personalized recipe! You can see the full details in the section on the right." 
            : data.text 
        };
        
        setMessages([...newMessages, assistantMessage]);
        setLastResult(recipe);
        if (isRecipe) {
          setShowResult(true);
        }
      } else if (data.error) {
        setMessages([...newMessages, { role: 'assistant', content: `Error: ${data.error}` }]);
      }
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Navbar />
      
      {/* Mobile Toggle (Only visible on small screens when result exists) */}
      {lastResult.raw && (
        <div className="md:hidden flex border-b border-gray-200 bg-white">
          <button 
            onClick={() => setShowResult(false)}
            className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 ${!showResult ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
          >
            <MessageSquare size={18} /> Chat
          </button>
          <button 
            onClick={() => setShowResult(true)}
            className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 ${showResult ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
          >
            <ChefHat size={18} /> Recipe
          </button>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden relative">
        {/* Chat Section */}
        <div className={`${showResult ? 'hidden md:flex' : 'flex'} w-full md:w-[400px] lg:w-[480px] flex-col border-r border-gray-200 bg-white relative z-10 shadow-2xl`}>
          {/* Header */}
          <div className="p-6 border-b border-gray-100 bg-white/80 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
                <ChefHat size={22} />
              </div>
              <div>
                <h2 className="font-black text-gray-800 tracking-tight leading-none">Cookmate AI</h2>
                <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
                </span>
              </div>
            </div>
          </div>

          {/* Messages with Background Pattern */}
          <div 
            ref={scrollRef} 
            className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#f8fafc] relative"
            style={{
              backgroundImage: `radial-gradient(#e2e8f0 0.5px, transparent 0.5px)`,
              backgroundSize: '24px 24px'
            }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`flex items-center gap-2 mb-2 px-1 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    msg.role === 'user' ? 'bg-purple-100 text-purple-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {msg.role === 'user' ? <User size={12} /> : <ChefHat size={12} />}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400">
                    {msg.role === 'user' ? 'You' : 'Chef Assistant'}
                  </span>
                </div>
                
                <div className={`max-w-[90%] p-4 shadow-sm relative group transition-all hover:shadow-md ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white rounded-2xl rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-100'
                }`}>
                  <p className="text-[15px] leading-relaxed whitespace-pre-wrap font-medium">{msg.content}</p>
                  
                  {/* Decorative corner for bubbles */}
                  <div className={`absolute top-0 w-4 h-4 ${
                    msg.role === 'user' 
                      ? 'right-[-8px] text-fuchsia-600' 
                      : 'left-[-8px] text-white'
                  }`}>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex flex-col items-start animate-in fade-in duration-300">
                <div className="flex items-center gap-2 mb-2 px-1">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <ChefHat size={12} className="animate-bounce" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400">Chef is thinking...</span>
                </div>
                <div className="bg-white p-5 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0s]"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl opacity-20 group-focus-within:opacity-100 transition duration-500 blur"></div>
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(input);
                    }
                  }}
                  placeholder="Ask for a recipe or cooking tip..."
                  rows={1}
                  className="w-full p-4 pr-14 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-transparent transition-all resize-none text-[15px] font-medium text-gray-800"
                />
                <button 
                  onClick={() => handleSendMessage(input)}
                  disabled={isLoading || !input.trim()}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl transition-all duration-300 ${
                    input.trim() 
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-200 hover:scale-105 active:scale-95' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-4 font-bold uppercase tracking-widest">
              Powered by Gemini AI • Cookmate Kitchen
            </p>
          </div>
        </div>

        {/* Result Section */}
        <div className={`${!showResult ? 'hidden md:flex' : 'flex'} flex-1 flex-col overflow-y-auto bg-slate-100 p-4 md:p-6 lg:p-12`}>
          {lastResult.raw ? (
            <RecipeCard 
              recipe={lastResult} 
              onBack={() => setShowResult(false)} 
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-6 animate-pulse">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                <ChefHat size={48} className="text-gray-200" />
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-300">Awaiting your request...</p>
                <p className="text-sm">Your masterpiece will appear here shortly.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CreatePage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#f2a93b] border-t-transparent rounded-full animate-spin"></div>
        <p className="font-bold text-gray-500 tracking-widest uppercase text-xs">Cooking something special...</p>
      </div>
    </div>}>
      <CreateContent />
    </Suspense>
  );
}
