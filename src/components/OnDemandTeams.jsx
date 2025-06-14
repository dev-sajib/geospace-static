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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <FaClock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                Hire Quickly
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hire in under 24 hours—no hassle, no delays. Scale up or down
                with flexibility, choosing from hourly, part-time, or full-time
                engagements. It's fast, simple, and built to adapt to your
                needs.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <FaMedal className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                The Top 5%
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We handpick only the best. Every applicant to our network
                undergoes rigorous testing and vetting to ensure they meet the
                highest standards. Our selective process leads to a 98%
                trial-to-hire success rate, ensuring you get top-tier
                professionals every time.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <FaBars className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Leading the Future of Work
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We're preparing you for tomorrow's business challenges.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <FaAward className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                A Level Above
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Integrity, professionalism, and communication—these aren't just
                buzzwords; they're a commitment. Every freelancer in our global
                network embodies the highest standards in everything they do, so
                you can be confident in your team's performance and reliability.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[500px] flex items-center justify-center bg-white">
            <div className="absolute top-10 left-10 z-10 shadow-xl rounded-xl bg-white p-6 w-80">
              <img
                src="/images/team3.jpg"
                alt="Ric Saltzman"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="font-bold text-lg mt-4">Ric Saltzman</h2>
              <p className="text-green-500 text-sm">
                Verified Expert in Mining
              </p>
              <p className="text-gray-700 text-sm">Coal Miner</p>
              <p className="text-gray-400 text-xs mt-2">Previously at</p>
              <p className="font-semibold">Teck</p>
              <p className="text-gray-500 text-xs">Teck Resources Limited</p>
            </div>

            <div className="absolute -top-14 left-78 z-20 shadow-2xl rounded-xl bg-white p-6 w-80">
              <img
                src="/images/team4.jpg"
                alt="Ric Saltzman"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="font-bold text-lg mt-4">Ric Saltzman</h2>
              <p className="text-green-500 text-sm">
                Verified Expert in Mining
              </p>
              <p className="text-gray-700 text-sm">Coal Miner</p>
              <p className="text-gray-400 text-xs mt-2">Previously at</p>
              <p className="font-semibold">Teck</p>
              <p className="text-gray-500 text-xs">Teck Resources Limited</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnDemandTeams;
