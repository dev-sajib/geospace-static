const PageHero = ({ title, description, bgColor = "bg-emerald-600" }) => {
  return (
    <section className={`${bgColor} py-12 sm:py-16 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
