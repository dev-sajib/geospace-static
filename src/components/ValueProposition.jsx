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
    <div className="p-8 rounded-xl transition-all duration-300 cursor-pointer group bg-gray-100 hover:bg-emerald-600 hover:text-white">
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-emerald-100 group-hover:bg-white group-hover:bg-opacity-20">
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-white">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-gray-600 group-hover:text-emerald-100">
        {description}
      </p>

      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="flex items-center text-white font-medium hover:underline">
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
        <FaHardHat className="w-8 h-8 text-emerald-600 group-hover:text-emerald-600" />
      ),
    },
    {
      title: "Miner",
      description:
        "Skilled miners proficient in underground and surface mining techniques, safety protocols, and resource extraction.",
      icon: (
        <FaHardHat className="w-8 h-8 text-emerald-600 group-hover:text-emerald-600" />
      ),
    },
    {
      title: "Engineer",
      description:
        "Expert engineers across various disciplines, specializing in designing, developing, and optimizing industrial projects.",
      icon: (
        <FaUserTie className="w-8 h-8 text-emerald-600 group-hover:text-emerald-600" />
      ),
    },
    {
      title: "Environment Specialist",
      description:
        "A professional focused on analyzing, assessing, and resolving issues related to the environment. They work across various fields to protect ecosystems, promote sustainability, and ensure compliance with environmental regulations.",
      icon: (
        <FaLeaf className="w-8 h-8 text-emerald-600 group-hover:text-emerald-600" />
      ),
    },
    {
      title: "Data Specialist",
      description:
        "Data-driven analysts adept at interpreting complex data sets, providing actionable insights.",
      icon: (
        <FaChartBar className="w-8 h-8 text-emerald-600 group-hover:text-emerald-600" />
      ),
    },
    {
      title: "Electrician",
      description:
        "Detail-oriented inspectors ensuring compliance with safety standards, quality control, and regulatory requirements.",
      icon: (
        <FaBolt className="w-8 h-8 text-emerald-600 group-hover:text-emerald-600" />
      ),
    },
    {
      title: "Professional Driller",
      description:
        "Strategic managers with leadership experience in overseeing operations and ensuring project success across sectors.",
      icon: (
        <FaTools className="w-8 h-8 text-emerald-600 group-hover:text-emerald-600" />
      ),
    },
    {
      title: "Technician",
      description:
        "A technician in mining and geology plays a critical role in the exploration, extraction, and analysis of mineral resources. Their work supports geologists, mining engineers, and other professionals in gathering data.",
      icon: (
        <FaCog className="w-8 h-8 text-emerald-600 group-hover:text-emerald-600" />
      ),
    },
    {
      title: "Petroleum Expert",
      description:
        "Experienced operators proficient in controlling and monitoring machinery, equipment, and systems to ensure optimal performance and safety.",
      icon: (
        <FaOilCan className="w-8 h-8 text-emerald-600 group-hover:text-emerald-600" />
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leverage World-Class
          </h2>
          <h2 className="text-4xl font-bold text-emerald-600 mb-6">
            Geological and Mining Talent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are the largest, globally-distributed network of expert geologist
            and miner, ready to tackle your most critical project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {professionals.map((professional, index) => (
            <ProfessionalCard key={index} {...professional} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
