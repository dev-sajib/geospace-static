import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const TestimonialCard = ({ quote, author, position, company, rating }) => {
  return (
    <div className="bg-emerald-50 rounded-xl p-4 sm:p-6 lg:p-8 min-w-[280px] sm:min-w-[320px] lg:min-w-[500px] mx-2 sm:mx-4">
      <div className="text-4xl sm:text-5xl lg:text-6xl text-emerald-400 font-serif mb-3 sm:mb-4">
        "
      </div>

      <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-4 lg:line-clamp-none">
        {quote}
      </blockquote>

      <div className="flex items-center mb-3 sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="border-t border-gray-200 pt-3 sm:pt-4">
        <p className="font-semibold text-gray-900 text-xs sm:text-sm">
          {author}
        </p>
        <p className="text-gray-600 text-xs sm:text-sm">{position}</p>
        <div className="mt-1 sm:mt-2">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const ClientSatisfaction = ({
  title = "Our Clients' Satisfaction is Our Top Priority",
  subtitle = "We have a reputation for helping clients around the world find success on their most important projects",
  bgColor = "bg-white",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "I have been working with Geoespace for several years now, partnering with their talented miners and geologists. The professionals they provide are exceptionally skilled, highly reliable, and truly committed to the success of our projects. They seamlessly integrate into our teams, bringing both technical expertise and excellent communication to the table. Geoespace's dedication to delivering top-tier talent has made them an invaluable partner, and their level of professionalism makes collaboration effortless and efficient.",
      author: "Ian Stokes-Rees",
      position: "Partner",
      company: "Teck",
      rating: 4,
    },
    {
      quote:
        "I have been working with Geoespace for several years now, partnering with their talented miners and geologists. The professionals they provide are exceptionally skilled, highly reliable, and truly committed to the success of our projects. They seamlessly integrate into our teams, bringing both technical expertise and excellent communication to the table. Geoespace's dedication to delivering top-tier talent has made them an invaluable partner, and their level of professionalism makes collaboration effortless and efficient.",
      author: "Tess Caputo",
      position: "Chief Operations Officer",
      company: "Forbes",
      rating: 4,
    },
    {
      quote:
        "Working with Geoespace has transformed how we approach our geological projects. Their network of experts brings unparalleled knowledge and dedication to every engagement.",
      author: "Michael Rodriguez",
      position: "Project Director",
      company: "Mining Corp",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
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
    <section className={`py-12 sm:py-16 lg:py-20 ${bgColor}`}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            {title.includes("Satisfaction") ? (
              <>
                Our Clients'{" "}
                <span className="text-emerald-600">Satisfaction</span> is Our
                Top Priority
              </>
            ) : (
              <>
                Hear From <span className="text-emerald-600">Our Clients</span>
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-200 shadow-sm"
          >
            <FaChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-200 shadow-sm"
          >
            <FaChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600" />
          </button>

          <div className="overflow-hidden mx-0 sm:mx-12 lg:mx-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl w-full">
                    <TestimonialCard {...testimonial} />
                    {testimonials[index + 1] && (
                      <div className="hidden lg:block">
                        <TestimonialCard {...testimonials[index + 1]} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2 sm:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index
                    ? "bg-[#368468]"
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
              <FaChevronLeft className="w-4 h-4 text-emerald-600" />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm hover:bg-gray-50"
            >
              <FaChevronRight className="w-4 h-4 text-emerald-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSatisfaction;
