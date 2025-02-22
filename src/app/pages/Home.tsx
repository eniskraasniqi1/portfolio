import Links from "../../components/Profile/Links";
import Timeline from "../../components/Timeline";

const Home = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-zinc-800 lg:text-4xl">
        Hi, I am Enis Krasniqi!
      </h1>

      <Links />

      <div className="my-4 border-t border-zinc-100"></div>

      <div className="text-lg text-zinc-600 max-w-3xl">
        <p className="mt-4">
          A 25-year-old Software Engineer based in Pristina, Kosovo, passionate
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
