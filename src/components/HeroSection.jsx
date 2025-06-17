import { useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2  items-center">
            <div className="py-12 sm:py-16 lg:py-20 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
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

            <div
              className="flex justify-center mt-8 lg:mt-0"
              style={{
                height: "100%",
                alignItems: "end",
                paddingTop: "80px",
                marginLeft: "-130px",
              }}
            >
              <div
                className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md"
                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
              >
                <div
                  className=""
                  style={{ height: "100%", display: "flex", alignItems: "end" }}
                >
                  <img
                    src="/images/team3.png"
                    alt="Professional Miner"
                    className=""
                  />
                </div>

                <div
                  style={{
                    top: "0px",
                    bottom: "auto",
                    background: 'url("/images/Vector12.svg")',
                    backgroundSize: "contain",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                    paddingRight: "60px",
                  }}
                  className="absolute bottom-6 right-4  p-3 sm:p-4 w-48 sm:w-64  transform scale-150 hover:scale-155 transition-transform duration-200"
                >
                  <img src="/images/map.png" className="py-1 sm:py-1 lg:py-1" />
                  <div className="flex items-center mb-3">
                    {/*<div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">*/}
                    {/*  <svg*/}
                    {/*    className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600"*/}
                    {/*    fill="currentColor"*/}
                    {/*    viewBox="0 0 20 20"*/}
                    {/*  >*/}
                    {/*    <path*/}
                    {/*      fillRule="evenodd"*/}
                    {/*      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"*/}
                    {/*      clipRule="evenodd"*/}
                    {/*    />*/}
                    {/*  </svg>*/}
                    {/*</div>*/}
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
                    <img
                      src="/images/varified-badge.svg"
                      className="py-1 sm:py-1 lg:py-1"
                    />

                    {/*<div className="w-3 h-3 bg-emerald-500 rounded-full mr-2 flex-shrink-0"></div>*/}
                    {/*<span className="text-emerald-600 text-xs sm:text-sm font-medium line-clamp-1">*/}
                    {/*  Verified Expert in Mining*/}
                    {/*</span>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center mb-8 text-sm sm:text-base">
            Trusted By Leading Brands and Start Ups
          </p>

          <div className="relative group">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              className="trusted-brands-swiper"
            >
              {trustedBrands.map((brand, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-20 sm:h-24 lg:h-28 px-4">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
