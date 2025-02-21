import { TechStackList } from "../../constants/techStack";

const TechStack = ({ list }: { list: TechStackList }) => {
  return (
    <div>
      <div className="text-white grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
        {list.map((tech) => {
          const IconComponent = tech.icon;

          return (
            <button
              key={tech.name}
              type="button"
              className="flex flex-col items-center justify-center bg-zinc-50 text-zinc-800 ring-2 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm gap-1.5 h-24 rounded-lg p-3 transition-all ease-in-out group cursor-pointer"
            >
              <IconComponent
                className="transition-transform duration-300 group-hover:-translate-y-1"
                size={32}
                color={tech.color}
              />
              <p>{tech.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
