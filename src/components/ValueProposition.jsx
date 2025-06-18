import {
  FaHardHat,
  FaUserTie,
  FaWrench,
  FaLeaf,
  FaChartBar,
  FaBolt,
  FaTools,
  FaCog,
  FaOilCan,
} from "react-icons/fa";

const ProfessionalCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 md:p-8 rounded-xl transition-all duration-300 cursor-pointer group bg-gray-100 hover:bg-[#368468] hover:text-white min-h-[280px] flex flex-col">
      <div className="mb-4 md:mb-6">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-emerald-100 group-hover:bg-white group-hover:bg-opacity-20">
          {icon}
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 group-hover:text-white line-clamp-2">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-gray-600 group-hover:text-emerald-100 flex-1 mb-4">
        {description}
      </p>

      <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="flex items-center text-white font-medium hover:underline text-sm">
          View {title}s
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ValueProposition = () => {
  const professionals = [
    {
      title: "Geologist",
      description:
        "Experienced geologists with in-depth knowledge of earth sciences, mineral exploration, and geological mapping.",
      icon: (
        <img
          src="/images/geologist.svg"
          alt="Geologist"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
      ),
    },
    {
      title: "Miner",
      description:
        "Skilled miners proficient in underground and surface mining techniques, safety protocols, and resource extraction.",
      icon: (
        <img
          src="/images/miner.svg"
          alt="Miner"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
      ),
    },
    {
      title: "Engineer",
      description:
        "Expert engineers across various disciplines, specializing in designing, developing, and optimizing industrial projects.",
      icon: (
        <img
          src="/images/engineer.svg"
          alt="Engineer"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
      ),
    },
    {
      title: "Environment Specialist",
      description:
        "A professional focused on analyzing, assessing, and resolving issues related to the environment. They work across various fields to protect ecosystems, promote sustainability, and ensure compliance with environmental regulations.",
      icon: (
        <img
          src="/images/env-sp.svg"
          alt="Environment Specialist"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
      ),
    },
    {
      title: "Data Specialist",
      description:
        "Data-driven analysts adept at interpreting complex data sets, providing actionable insights.",
      icon: (
        <img
          src="/images/data-esp.svg"
          alt="Data Specialist"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
      ),
    },
    {
      title: "Electrician",
      description:
        "Detail-oriented inspectors ensuring compliance with safety standards, quality control, and regulatory requirements.",
      icon: (
        <img
          src="/images/electrician.svg"
          alt="Electrician"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
      ),
    },
    {
      title: "Professional Driller",
      description:
        "Strategic managers with leadership experience in overseeing operations and ensuring project success across sectors.",
      icon: (
        <img
          src="/images/driller.svg"
          alt="Professional Driller"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
      ),
    },
    {
      title: "Technician",
      description:
        "A technician in mining and geology plays a critical role in the exploration, extraction, and analysis of mineral resources. Their work supports geologists, mining engineers, and other professionals in gathering data.",
      icon: (
        <img
          src="/images/technician.svg"
          alt="Technician"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
      ),
    },
    {
      title: "Petroleum Expert",
      description:
        "Experienced operators proficient in controlling and monitoring machinery, equipment, and systems to ensure optimal performance and safety.",
      icon: (
        <img
          src="/images/petroleum.svg"
          alt="Petroleum Expert"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Leverage World-Class
          </h2>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 mb-4 sm:mb-6">
            Geological and Mining Talent
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We are the largest, globally-distributed network of expert geologist
            and miner, ready to tackle your most critical project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {professionals.map((professional, index) => (
            <ProfessionalCard key={index} {...professional} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
