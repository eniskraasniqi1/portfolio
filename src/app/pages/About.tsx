const About = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-zinc-800 lg:text-4xl dark:text-zinc-100">
        About
      </h1>

      <div className="my-4 border-t border-zinc-100 dark:border-zinc-800"></div>

      <div className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
        <p>
          Hello! I am <strong>Enis Krasniqi</strong>, currently working as a
          <strong> frontend developer</strong> remotely from Pristina, Kosovo.
        </p>
        <p className="mt-2">
          I have over 4 years of front-end experience mainly specialized in
          React and Next.js. While my specialty lies in front-end realm, I also
          have experience building full-stack applications using Node.js
          frameworks like Express and NestJS for the backend, along with
          MongoDB.
        </p>

        <p className="mt-2">
          In my spare time, I enjoy reading books 📚, running 🏃‍♂️, biking 🚴‍♂️, and
          watching movies 🎥.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-extrabold tracking-tight text-zinc-800">
          Experience
        </h2>

        <div className="my-4 border-t border-zinc-100 dark:border-zinc-800"></div>

        <ul className="mt-4 flex flex-col gap-2">
          <li>
            <strong>May 2022 - Present</strong> | Frontend developer at{" "}
            <a
              className="inline-flex items-center outline-none transition-colors font-semibold text-foreground hover:underline decoration-primary underline-offset-4"
              href="https://www.teamleader.eu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Teamleader
            </a>
            .
          </li>
          <li>
            <strong>Aug 2020 - Apr 2022</strong> | Full stack developer at{" "}
            <a
              className="inline-flex items-center outline-none transition-colors font-semibold text-foreground hover:underline decoration-primary underline-offset-4"
              href="https://www.starlabs.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              StarLabs
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
