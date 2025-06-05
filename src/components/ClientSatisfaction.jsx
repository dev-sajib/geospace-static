import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const TestimonialCard = ({ quote, author, position, company, rating }) => {
  return (
    <div className="bg-emerald-50 rounded-xl p-8 min-w-[500px] mx-4">
      <div className="text-6xl text-emerald-400 font-serif mb-4">"</div>

      <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
        {quote}
      </blockquote>

      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900 text-sm">{author}</p>
        <p className="text-gray-600 text-sm">{position}</p>
        <div className="mt-2">
          <p className="text-2xl font-bold text-gray-900">{company}</p>
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

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
          >
            <FaChevronLeft className="w-5 h-5 text-emerald-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
          >
            <FaChevronRight className="w-5 h-5 text-emerald-600" />
          </button>

          <div className="overflow-hidden mx-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
                    <TestimonialCard {...testimonial} />
                    {testimonials[index + 1] && (
                      <TestimonialCard {...testimonials[index + 1]} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSatisfaction;
