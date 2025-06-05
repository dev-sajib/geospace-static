const Testimonial = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 sm:mb-8">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 mb-4 sm:mb-6 mx-auto lg:mx-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-4 sm:mb-6">
                "We are really satisfied about this platform"
              </blockquote>
              <div className="text-white">
                <p className="text-base sm:text-lg font-medium">
                  The Walt Disney Company
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-emerald-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-emerald-500 bg-opacity-30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-emerald-400 bg-opacity-40 rounded-full flex items-center justify-center">
                    <div className="flex space-x-2 sm:space-x-4">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 sm:w-12 sm:h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110"
                        >
                          <svg
                            className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600"
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
                      ))}
                    </div>
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

export default Testimonial;
