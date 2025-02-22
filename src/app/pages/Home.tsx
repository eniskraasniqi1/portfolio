import { SiGithub, SiLinkedin } from "react-icons/si";
import Timeline from "../../components/Timeline";

const Home = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-zinc-800 lg:text-4xl">
        Hi, I am Enis Krasniqi!
      </h1>
      <div className="flex animate-fade-in flex-wrap items-center gap-4 animation-delay-3 mt-2">
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
      </div>

      <div className="my-4 border-t border-zinc-100"></div>

      <div className="text-lg text-zinc-600 max-w-3xl">
        <p className="mt-4">
          A 25-year-old Web Developer based in Pristina, Kosovo, passionate
          about learning and delivering next-generation user products and
          interfaces.
        </p>

        <p className="mt-4">
          I have over 4 years of front-end experience mainly specialized in
          React and Next.js. While my specialty lies in the front-end realm, I
          also have experience building full-stack applications using Node.js
          frameworks like Express and NestJS for the backend, along with
          MongoDB.
        </p>

        <p className="mt-6">
          In my spare time, I enjoy reading books 📚, running 🏃‍♂️, biking 🚴‍♂️, and
          watching movies 🎥.
        </p>
      </div>

      <div className="my-8 border-t border-zinc-100"></div>

      <div className="mt-4">
        <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-zinc-800">
          Experience
        </h2>

        <Timeline />
      </div>
    </div>
  );
};

export default Home;
