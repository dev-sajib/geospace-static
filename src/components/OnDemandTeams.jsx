import { FaClock, FaBars, FaChartLine, FaMedal, FaAward } from "react-icons/fa";

const ProcessStep = ({ number, title, description, icon }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
        {icon}
      </div>
      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-sm font-bold">
        {number}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const OnDemandTeams = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Build <span className="text-emerald-600">Amazing Teams</span>, On
            Demand.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Quickly assemble the teams you need, exactly when you need them.
            Whether you need a few specialists or a full team, we connect you
            with top-tier talent in a flash.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-8 lg:space-y-12">
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto lg:mx-0">
                <FaClock className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Hire Quickly
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Hire in under 24 hours—no hassle, no delays. Scale up or down
                with flexibility, choosing from hourly, part-time, or full-time
                engagements. It's fast, simple, and built to adapt to your
                needs.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto lg:mx-0">
                <FaBars className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Leading the Future of Work
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We're preparing you for tomorrow's business challenges.
              </p>
            </div>
          </div>

          <div className="space-y-8 lg:space-y-12">
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto lg:mx-0">
                <FaMedal className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-emerald-600 mb-2 sm:mb-3">
                The Top 5%
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We handpick only the best. Every applicant to our network
                undergoes rigorous testing and vetting to ensure they meet the
                highest standards. Our selective process leads to a 98%
                trial-to-hire success rate, ensuring you get top-tier
                professionals every time.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto lg:mx-0">
                <FaAward className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-emerald-600 mb-2 sm:mb-3">
                A Level Above
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Integrity, professionalism, and communication—these aren't just
                buzzwords; they're a commitment. Every freelancer in our global
                network embodies the highest standards in everything they do, so
                you can be confident in your team's performance and reliability.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 max-w-sm mx-auto lg:max-w-none">
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto lg:mx-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm sm:text-lg">
                    RS
                  </span>
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 text-center lg:text-left">
                Ric Saltzman
              </h4>

              <div className="flex items-center mb-2 justify-center lg:justify-start">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2 flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-emerald-600 font-medium line-clamp-1">
                  Verified Expert in Mining
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-600 mb-3 text-center lg:text-left">
                Coal Miner
              </p>

              <div className="text-xs sm:text-sm text-gray-500 text-center lg:text-left">
                <p className="mb-1 font-medium">PREVIOUSLY AT</p>
                <p className="font-medium text-gray-700 line-clamp-1">
                  <strong>Teck</strong> Teck Resources Limited
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold text-xs sm:text-sm">
                    RS
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1 truncate">
                    Ric Saltzman
                  </h4>
                  <div className="flex items-center mb-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1 flex-shrink-0"></div>
                    <span className="text-xs text-emerald-600 line-clamp-1">
                      Verified Expert in Mining
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">Coal Miner</p>
                  <div className="text-xs text-gray-500">
                    <p className="font-medium">PREVIOUSLY AT</p>
                    <p className="line-clamp-1">
                      <strong>Teck</strong> Teck Resources Limited
                    </p>
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

export default OnDemandTeams;
