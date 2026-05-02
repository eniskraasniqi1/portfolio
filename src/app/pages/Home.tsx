import { SiLinkedin } from "react-icons/si";
import Links from "../../components/Profile/Links";
import Timeline from "../../components/Timeline";
import { getAge } from "../../utils/calculateAge";

const Home = () => {
  const age = getAge();

  return (
    <article className="mt-8 lg:mt-16 pb-8">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 lg:text-5xl mb-3 dark:text-zinc-50">
          Hi, I&apos;m Enis Krasniqi!
        </h1>

        <p className="text-lg lg:text-xl text-zinc-600 max-w-2xl mb-6 dark:text-zinc-400">
          Full Stack Engineer building AI agents and LLM tooling for B2B SaaS.
        </p>

        <Links />

        <div className="mt-6">
          <a
            href="https://www.linkedin.com/in/enis-krasniqi-4aaa691a7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-zinc-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white dark:focus:ring-zinc-100 dark:focus:ring-offset-zinc-900"
            aria-label="Get in touch on LinkedIn"
          >
            <SiLinkedin aria-hidden="true" />
            <span>Get in touch</span>
          </a>
        </div>
      </header>

      <div className="my-8 border-t border-zinc-200 dark:border-zinc-800"></div>

      <section aria-labelledby="about-heading">
        <h2
          id="about-heading"
          className="mb-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          About
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-zinc-700 mb-6 dark:text-zinc-300">
            A {age}-year-old Full Stack Engineer based in Pristina, Kosovo. I
            ship production web apps for B2B SaaS — currently working on AI
            agents with tool-use capabilities, deepening into LLM-powered
            product features alongside the rest of the stack.
          </p>

          <p className="text-lg leading-relaxed text-zinc-700 mb-6 dark:text-zinc-300">
            5+ years of front-end engineering specialized in React, TypeScript,
            and Next.js. Since September 2025 I&apos;ve gone full stack, working
            extensively with PHP and a fleet of microservices, and integrating
            LLMs (OpenAI, Anthropic) into real product surfaces.
          </p>

          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Off-keyboard: reading, running, biking, and watching movies.
          </p>
        </div>
      </section>

      <div className="my-12 border-t border-zinc-200 dark:border-zinc-800"></div>

      <section aria-labelledby="experience-heading">
        <h2
          id="experience-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Experience
        </h2>

        <Timeline />
      </section>
    </article>
  );
};

export default Home;
