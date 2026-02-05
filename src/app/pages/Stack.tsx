import TechStack from "../../components/TechStack";
import { techStackCategories } from "../../constants/techStack";

const Stack = () => {
  return (
    <article className="mt-8 lg:mt-16 pb-8">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 lg:text-5xl mb-3">
          Tech Stack
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl">
          Technologies and tools I use to build modern web applications
        </p>
      </header>

      <div className="my-8 border-t border-zinc-200"></div>

      {techStackCategories.map((category, index) => (
        <section
          key={category.title}
          aria-labelledby={`category-${index}`}
          className="mb-12 last:mb-0"
        >
          <div className="mb-6">
            <h2
              id={`category-${index}`}
              className="text-2xl font-bold text-zinc-900 mb-2"
            >
              {category.title}
            </h2>
          </div>
          <TechStack list={category.items} />
        </section>
      ))}
    </article>
  );
};

export default Stack;
