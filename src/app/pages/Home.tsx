import { SiGithub, SiLinkedin } from "react-icons/si";

const Home = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-zinc-800 lg:text-4xl dark:text-zinc-100">
        👋 Hi, I am Enis Krasniqi!
      </h1>

      <div className="my-4 border-t border-zinc-100 dark:border-zinc-800"></div>

      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
        A 25-year-old Web Developer based in Pristina, Kosovo, with over 4 years
        of specialized front-end experience. Passionate about learning and
        delivering next-generation user products and interfaces.
      </p>

      <div className="flex animate-fade-in flex-wrap items-center gap-4 animation-delay-3 mt-2">
        <a
          className="outline-none transition-colors opacity-hover inline-flex items-center gap-1 font-medium text-base-300/80"
          href="https://github.com/eniskraasniqi1"
          aria-label="Github"
          title="Github"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiGithub />
          <span className="hidden sm:inline">Github</span>
        </a>
        <a
          className="outline-none transition-colors opacity-hover inline-flex items-center gap-1 font-medium text-linkedin"
          href="https://www.linkedin.com/in/enis-krasniqi-4aaa691a7"
          aria-label="Linkedin"
          title="Linkedin"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiLinkedin />
          <span className="hidden sm:inline">Linkedin</span>
        </a>
      </div>

      <div className="my-10 border-t border-zinc-100 dark:border-zinc-800"></div>
    </div>
  );
};

export default Home;
