const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Hire the Top 5% of{" "}
              <span className="text-emerald-600">Freelance Experts</span> in the
              field
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              GeoEspace is the exclusive No. 1 workspace for the top freelance
              geologists and miners in the world. Leading companies in geology
              and mining hire GeoEspace professionals for their most critical
              projects. GeoEspace recruits only the top 5% of elite
              professionals, ensuring that companies have access to the best
              talent for their exploration, mining, and environmental needs.
            </p>
            <button className="bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Hire Freelancer
            </button>
          </div>

          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-emerald-100 rounded-full flex items-center justify-center relative mx-auto">
                <div className="absolute -top-4 -right-4 sm:top-4 sm:right-4 bg-white rounded-xl shadow-lg p-3 sm:p-4 w-48 sm:w-64 border border-gray-100 transform hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        John Carol
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Coal Miner
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-emerald-600 text-xs sm:text-sm font-medium line-clamp-1">
                      Verified Expert in Mining
                    </span>
                  </div>
                </div>

                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-emerald-200 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
