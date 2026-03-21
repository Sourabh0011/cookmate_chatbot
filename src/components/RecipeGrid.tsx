import Image from 'next/image';
import Link from 'next/link';


interface Recipe {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  creator?: string;
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="mb-6">
      <div className="group overflow-hidden rounded-2xl border border-solid border-neutral-200 bg-white shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-lg">
        <div className="relative aspect-square">
          <Link className="block h-full w-full" href={`/recipes/${recipe.slug}`}>
            <Image
              alt={recipe.title}
              fill
              className="object-cover"
              src={recipe.image}
            />
          </Link>
        </div>
        <div className="px-4 py-3">
          <div className="mb-2 text-base font-bold leading-5">
            <Link
              className="text-neutral-900 transition no-underline group-hover:text-fuchsia-700"
              href={`/recipes/${recipe.slug}`}
            >
              {recipe.title}
            </Link>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-500">{recipe.date}</span>
            <span className="text-neutral-700">
              <Link
                className="text-neutral-700 font-bold hover:text-fuchsia-700 no-underline ml-2"
                href="/profile"
              >
                {recipe.creator || ''}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecipeGrid = () => {
  const recipes: Recipe[] = [
    {
      id: '1',
      title: 'Secretly Healthy Cookie Dough Bars',
      slug: 'peanut-butter-chickpea-cookie-dough-bars-lgny345a',
      date: '4/19/2023',
      image: 'https://upcdn.io/W142hmp/recipe/uploads/2023/04/19/blondies-stacked-3L6A.jpg.webp.crop',
    },
    {
      id: '2',
      title: 'Decadent Vegan Fudge Brownies',
      slug: 'decadent-vegan-fudge-brownies-lgnxugem',
      date: '4/19/2023',
      image: 'https://upcdn.io/W142hmp/recipe/uploads/2023/04/19/Vegan_Brownies-wRsu.jpg.webp.crop',
    },
    {
      id: '3',
      title: 'Vegan Peanut Butter & Jelly Thumbprint Cookies',
      slug: 'peanut-butter-and-jelly-thumbprint-cookies-vegan-lgnxnboh',
      date: '4/19/2023',
      image: 'https://upcdn.io/W142hmp/recipe/uploads/2023/04/19/Thumbprint_cookies_Stack-5Hkv.jpg.webp.crop',
    },
    {
      id: '4',
      title: 'Tomato and Chickpea Curry',
      slug: 'tomato-and-chickpea-curry-lgnyi9qp',
      date: '4/19/2023',
      image: 'https://upcdn.io/W142hmp/recipe/uploads/2023/04/19/Curry-2hiC.jpg.webp',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mb-8">
      <h2 className="my-6 text-center text-4xl font-bold font-secondary">
        Featured AI Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
