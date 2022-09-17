const Hero = () => {
  return (
    <div
      className="hero h-screen"
      style={{
        backgroundImage: `url(hero.webp)`,
        height: "calc(100vh - 72px)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            Taket ditt er en verdifull ressurs du bør forvalte godt
          </h1>
          <p className="mb-5">Prosolar bygger og drifter dine solcelleanlegg</p>
          <button className="btn btn-primary">Finn ut mer</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
