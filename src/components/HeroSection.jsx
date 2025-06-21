import { useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { LogoCarousel } from "./LogoCarousel.jsx";

const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const trustedBrands = [
    {
      name: "CNESST",
      logo: "/images/CNESST.svg",
    },
    {
      name: "AEMQ",
      logo: "/images/AEMQ.svg",
    },
    {
      name: "OGQ",
      logo: "/images/OGQ.svg",
    },
    {
      name: "Wallbridge Mining",
      logo: "/images/Wallbridge Mining.svg",
    },
    {
      name: "Wallbridge Mining",
      logo: "/images/Wallbridge Mining.svg",
    },
  ];

  return (
    <>
      <section className="" style={{ backgroundColor: "#e7f3f0" }}>
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] lg:min-h-[600px]">
            <div className="py-12 sm:py-16 lg:py-20 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Hire the Top 5% of Freelance Experts in the field
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                GeoEspace is the exclusive No. 1 workspace for the top freelance
                geologists and miners in the world. Leading companies in geology
                and mining hire GeoEspace professionals for their most critical
                projects. GeoEspace recruits only the top 5% of elite
                professionals, ensuring that companies have access to the best
                talent for their exploration, mining, and environmental needs.
              </p>
              <button className="bg-[#368468] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Hire Freelancer
              </button>
            </div>

            <div className="hidden lg:flex justify-center items-center order-1 lg:order-2 py-8 lg:py-0">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative flex justify-center items-end h-64 sm:h-80 lg:h-96">
                  <img
                    src="/images/team3.png"
                    alt="Professional Miner"
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div
                  className="absolute bottom-48 right-4 sm:bottom-56 sm:right-6 lg:bottom-64 lg:right-8 bg-white rounded-xl p-3 sm:p-4 w-48 sm:w-56 lg:w-64 transform hover:scale-105 transition-transform duration-200"
                  style={{
                    background: 'url("/images/Vector12.svg")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img src="/images/map.png" className="w-full mb-2 sm:mb-3" />
                  <div className="mb-3">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                      John Carol
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Coal Miner
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/images/varified-badge.svg"
                      alt="Verified Badge"
                      className="h-4 sm:h-5 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 text-center">
            Trusted By Leading Brands and Start Ups
          </p>

          <div className="relative group">
            <LogoCarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
