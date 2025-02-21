import TechStack from "../../components/TechStack";
import { technicalStackList } from "../../constants/techStack";

const Stack = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-zinc-800 lg:text-4xl dark:text-zinc-100">
        Technical Stack
      </h1>

      <div className="my-4 border-t border-zinc-100 dark:border-zinc-800"></div>

      <TechStack list={technicalStackList} />
    </div>
  );
};

export default Stack;
