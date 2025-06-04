import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FreelancerCard = ({
  name,
  verifiedExpert,
  role,
  previousCompany,
  companyName,
  imagePlaceholder,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm min-w-[280px] mx-3">
      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-500 text-sm">{imagePlaceholder}</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>

      <div className="flex items-center mb-3">
        <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
        <span className="text-sm text-emerald-600 font-medium">
          {verifiedExpert}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{role}</p>

      <div className="text-sm text-gray-500">
        <p className="mb-1">PREVIOUSLY AT</p>
        <p className="font-medium text-gray-700">
          <strong>{previousCompany}</strong> {companyName}
        </p>
      </div>
    </div>
  );
};

const FreelancerGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const freelancers = [
    {
      name: "Ric Saltzman",
      verifiedExpert: "Verified Expert in Mining",
      role: "Coal Miner",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
      imagePlaceholder: "Freelancer Image",
    },
    {
      name: "Ric Saltzman",
      verifiedExpert: "Verified Expert in Mining",
      role: "Coal Miner",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
      imagePlaceholder: "Freelancer Image",
    },
    {
      name: "Henery Marcel",
      verifiedExpert: "Verified Expert in Mining",
      role: "Coal Miner",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
      imagePlaceholder: "Freelancer Image",
    },
    {
      name: "Henery Marcel",
      verifiedExpert: "Verified Expert in Mining",
      role: "Coal Miner",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
      imagePlaceholder: "Freelancer Image",
    },
    {
      name: "Sarah Johnson",
      verifiedExpert: "Verified Expert in Mining",
      role: "Coal Miner",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
      imagePlaceholder: "Freelancer Image",
    },
  ];

  const cardsToShow = 4;
  const maxSlide = Math.max(0, freelancers.length - cardsToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center transition-colors shadow-sm ${
              currentSlide === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50 cursor-pointer"
            }`}
          >
            <FaChevronLeft className="w-5 h-5 text-emerald-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center transition-colors shadow-sm ${
              currentSlide === maxSlide
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50 cursor-pointer"
            }`}
          >
            <FaChevronRight className="w-5 h-5 text-emerald-600" />
          </button>

          <div className="overflow-hidden mx-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / cardsToShow)
                }%)`,
              }}
            >
              {freelancers.map((freelancer, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <FreelancerCard {...freelancer} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerGrid;
