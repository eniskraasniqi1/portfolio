import Links from "../../components/Profile/Links";
import Timeline from "../../components/Timeline";
import { getAge } from "../../utils/calculateAge";

const Home = () => {
  const age = getAge();

  return (
    <article className="mt-8 lg:mt-16 pb-8">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 lg:text-5xl mb-4">
          Hi, I'm Enis Krasniqi!
        </h1>

        <Links />
      </header>

      <div className="my-8 border-t border-zinc-200"></div>

      <section className="prose prose-lg max-w-none" aria-label="About me">
        <p className="text-lg leading-relaxed text-zinc-700 mb-6">
          A {age}-year-old Software Engineer based in Pristina, Kosovo, passionate
          about learning and delivering next-generation user products and
          interfaces.
        </p>

        <p className="text-lg leading-relaxed text-zinc-700 mb-6">
          I have over 4 years of front-end experience mainly specialized in
          React and Next.js. While my specialty lies in the front-end realm, I
          also have experience building full-stack applications using Node.js
          frameworks like Express and NestJS for the backend, along with
          MongoDB.
        </p>

        <p className="text-lg leading-relaxed text-zinc-700">
          In my spare time, I enjoy reading books, running, biking, and
          watching movies.
        </p>
      </section>

      <div className="my-12 border-t border-zinc-200"></div>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="mb-8 text-3xl font-bold tracking-tight text-zinc-900">
          Experience
        </h2>

        <Timeline />
      </section>
    </article>
  );
};

export default Home;
