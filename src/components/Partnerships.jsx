import { useState } from "react";

const PartnerLogo = ({ name, subtitle, logoPlaceholder }) => {
  return (
    <div className="flex flex-col items-center text-center min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] px-4 sm:px-6 lg:px-8">
      <div className="w-24 h-16 sm:w-28 sm:h-18 lg:w-32 lg:h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 hover:bg-gray-200 transition-colors duration-200">
        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">
          {logoPlaceholder}
        </div>
      </div>

      <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-gray-900 line-clamp-2">
        {name}
      </h3>
    </div>
  );
};

const Partnerships = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partnershipSlides = [
    [
      {
        name: "OGQ & GeoEspace",
        subtitle: "Ordre des géologues du Québec",
        logoPlaceholder: "OGQ",
      },
      {
        name: "AEMQ & GeoEspace",
        subtitle: "Association de l'exploration minière du Québec",
        logoPlaceholder: "AEMQ",
      },
      {
        name: "WallBridge & GeoEspace",
        subtitle: "WallBridge Mining Company",
        logoPlaceholder: "WM",
      },
    ],
    [
      {
        name: "Mining Corp & GeoEspace",
        subtitle: "Global Mining Solutions",
        logoPlaceholder: "MC",
      },
      {
        name: "GeoTech & GeoEspace",
        subtitle: "Geological Technology Partners",
        logoPlaceholder: "GT",
      },
      {
        name: "EarthSci & GeoEspace",
        subtitle: "Earth Sciences Institute",
        logoPlaceholder: "ES",
      },
    ],
  ];

  const totalSlides = partnershipSlides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="text-emerald-600">Collaborations</span> With
            Leading Brands
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with a number of top-tier companies on imagining the
            future of work. Have a look.
          </p>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partnershipSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-16 px-4">
                    {slide.map((partner, partnerIndex) => (
                      <PartnerLogo key={partnerIndex} {...partner} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-200 shadow-sm z-10"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-200 shadow-sm z-10"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8 sm:mt-12">
          {partnershipSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                currentSlide === index
                  ? "bg-emerald-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-6 sm:hidden">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm hover:bg-gray-50"
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm hover:bg-gray-50"
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
