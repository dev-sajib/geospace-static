const HeroSection = () => {
  const categories = ["NEWEST", "UI/UX", "MOBILE", "Web/App Development", "QA"];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Hire the Top 5% of{" "}
              <span className="text-emerald-600">Freelance Experts</span> in the
              field
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              GeoEspace is the exclusive No. 1 workspace for the top freelance
              geologists and miners in the world. Leading companies in geology
              and mining hire GeoEspace professionals for their most critical
              projects. GeoEspace recruits only the top 5% of elite
              professionals, ensuring that companies have access to the best
              talent for their exploration, mining, and environmental needs.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors">
              Hire Freelancer
            </button>

            {/* <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">
                Available categories currently recruiting
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-emerald-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div> */}
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-emerald-100 rounded-full flex items-center justify-center relative">
                <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-4 w-64 border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-emerald-600"
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
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        John Carol
                      </h3>
                      <p className="text-gray-500 text-sm">Coal Miner</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                    <span className="text-emerald-600 text-sm font-medium">
                      Verified Expert in Mining
                    </span>
                  </div>
                </div>

                <div className="w-64 h-64 bg-emerald-200 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
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
