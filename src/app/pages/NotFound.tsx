const NotFound = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-zinc-800 lg:text-4xl">
        Page Not found!
      </h1>

      <div className="my-4 border-t border-zinc-100"></div>

      <div className="text-lg text-zinc-600 max-w-3xl">
        <p className="mt-4">
          We could not find what you were looking for. Please contact the owner
          of this site if you think their link is broken.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
