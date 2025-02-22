import Timeline from "../../components/Timeline";

const About = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-zinc-800 lg:text-4xl">
        About
      </h1>

      <div className="my-4 border-t border-zinc-100"></div>

      <div className="mt-6 text-lg text-zinc-600 max-w-3xl">
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

        <div className="my-4 mb-8 border-t border-zinc-100"></div>

        <Timeline />
      </div>
    </div>
  );
};

export default About;
