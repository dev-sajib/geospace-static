import { useRef, useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FreelancerCard = ({
  name,
  verifiedExpert,
  role,
  previousCompany,
  companyName,
  image,
  isActive,
}) => {
  return (
    <div
      className={`bg-white rounded-xl border ${
        isActive ? "text-emerald-600" : "border-gray-200"
      } p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col`}
    >
      <div className="w-full h-48 bg-white-100 rounded-lg mb-4 overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>

      <div className="flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center mb-3">
          <img
            src="/images/varified-badge.svg"
            alt="Verified Expert"
            className="w-40 h-10 object-contain"
          />
        </div>

        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-2 flex-grow">
          {role}
        </p>

        <div className="text-xs sm:text-sm text-gray-500 mt-auto">
          <p className="mb-1 font-medium">PREVIOUSLY AT</p>
          <p className="font-medium text-gray-700 line-clamp-2">
            <strong>{previousCompany}</strong> {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};

const FreelancerCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const freelancers = [
    {
      name: "Ric Saltzman",
      verifiedExpert: "Verified Expert in Mining",
      role: "Coal Miner",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
      image: "/images/team3.jpg",
    },
    {
      name: "Maria Rodriguez",
      verifiedExpert: "Verified Expert in Geology",
      role: "Senior Geologist",
      previousCompany: "Barrick",
      companyName: "Barrick Gold Corporation",
      image: "/images/team4.jpg",
    },
    {
      name: "Henery Marcel",
      verifiedExpert: "Verified Expert in Mining",
      role: "Mining Engineer",
      previousCompany: "Vale",
      companyName: "Vale S.A.",
      image: "/images/team5.jpg",
    },
    {
      name: "Sarah Johnson",
      verifiedExpert: "Verified Expert in Environmental",
      role: "Environmental Specialist",
      previousCompany: "Newmont",
      companyName: "Newmont Corporation",
      image: "/images/team3.jpg",
    },
    {
      name: "David Chen",
      verifiedExpert: "Verified Expert in Drilling",
      role: "Professional Driller",
      previousCompany: "Rio Tinto",
      companyName: "Rio Tinto Group",
      image: "/images/team4.jpg",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Top Freelancers in Geoscience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with verified experts in mining, geology, and environmental
            sciences
          </p>
        </div>

        <div className="flex justify-end space-x-3 mb-4">
          <button
            ref={prevRef}
            className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm hover:bg-gray-50 cursor-pointer"
          >
            <FaChevronLeft className="w-4 h-4 text-emerald-600" />
          </button>
          <button
            ref={nextRef}
            className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm hover:bg-gray-50 cursor-pointer"
          >
            <FaChevronRight className="w-4 h-4 text-emerald-600" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // 👈 default to 1 for mobile
          loop={true}
          speed={600}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {freelancers.map((freelancer, index) => (
            <SwiperSlide key={index}>
              <FreelancerCard
                {...freelancer}
                isActive={index === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FreelancerCarousel;
