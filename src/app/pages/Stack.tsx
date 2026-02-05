import TechStack from "../../components/TechStack";
import { technicalStackList } from "../../constants/techStack";

const Stack = () => {
  return (
    <article className="mt-8 lg:mt-16">
      <header>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-zinc-800 lg:text-4xl">
          Tech Stack
        </h1>
      </header>

      <div className="my-4 border-t border-zinc-100"></div>

      <section aria-label="Technologies and tools">
        <TechStack list={technicalStackList} />
      </section>
    </article>
  );
};

export default Stack;
