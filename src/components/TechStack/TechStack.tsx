import { TechStackList } from "../../constants/techStack";

const TechStack = ({ list }: { list: TechStackList }) => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
        {list.map((tech) => {
          const IconComponent = tech.icon;

          return (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center bg-white text-zinc-800 ring-1 shadow-md hover:shadow-lg shadow-zinc-800/5 ring-zinc-200 gap-2 h-28 rounded-xl p-4 transition-all duration-300 ease-out group cursor-pointer hover:scale-105"
              role="article"
              aria-label={`${tech.name} technology`}
            >
              <IconComponent
                className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                size={36}
                color={tech.color}
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-center">{tech.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
