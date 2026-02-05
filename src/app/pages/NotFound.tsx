const NotFound = () => {
  return (
    <div className="mt-8 lg:mt-16 pb-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 lg:text-5xl">
        Page Not Found
      </h1>

      <div className="my-8 border-t border-zinc-200"></div>

      <div className="text-lg text-zinc-700 max-w-3xl">
        <p className="leading-relaxed">
          We could not find what you were looking for. Please contact the owner
          of this site if you think their link is broken.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
