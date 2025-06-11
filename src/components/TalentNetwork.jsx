import { useState } from "react";
import {
  FaBolt,
  FaLeaf,
  FaOilCan,
  FaCog,
  FaHardHat,
  FaUserTie,
  FaLightbulb,
} from "react-icons/fa";

const TalentCard = ({
  name,
  role,
  verifiedExpert,
  previousCompany,
  companyName,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
      <div className="w-full h-32 sm:h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-grow flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center line-clamp-1">
          {name}
        </h3>

        <div className="flex items-center mb-3 justify-center">
          <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2 flex-shrink-0"></div>
          <span className="text-xs sm:text-sm text-emerald-600 font-medium text-center line-clamp-1">
            {verifiedExpert}
          </span>
        </div>

        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-center flex-grow">
          {role}
        </p>

        <div className="text-xs sm:text-sm text-gray-500 text-center mt-auto">
          <p className="mb-1 font-medium">PREVIOUSLY AT</p>
          <p className="font-medium text-gray-700 line-clamp-1">
            <strong>{previousCompany}</strong> {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};

const DiscoveryCard = () => {
  return (
    <div className="bg-emerald-600 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-center h-full min-h-[280px]">
      <div className="text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <FaLightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-2">Discover 50,000+</h3>
        <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          More Talent
        </h4>
        <p className="text-emerald-100 text-sm sm:text-base">
          in the Geospace Network
        </p>
      </div>
    </div>
  );
};

const TalentNetwork = () => {
  const [activeTab, setActiveTab] = useState("Electrician");

  const tabs = [
    { name: "Electrician", icon: <FaBolt className="w-3 h-3 sm:w-4 sm:h-4" /> },
    {
      name: "Environment Specialist",
      icon: <FaLeaf className="w-3 h-3 sm:w-4 sm:h-4" />,
    },
    {
      name: "Petroleum Expert",
      icon: <FaOilCan className="w-3 h-3 sm:w-4 sm:h-4" />,
    },
    { name: "Technician", icon: <FaCog className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Miner", icon: <FaHardHat className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Engineer", icon: <FaUserTie className="w-3 h-3 sm:w-4 sm:h-4" /> },
    {
      name: "Geologist",
      icon: <FaHardHat className="w-3 h-3 sm:w-4 sm:h-4" />,
    },
  ];

  const talentData = [
    {
      name: "Ric Saltzman",
      role: "Coal Miner",
      verifiedExpert: "Verified Expert in Mining",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
      image: "/images/team3.jpg",
    },
    {
      name: "Maria Rodriguez",
      role: "Environmental Specialist",
      verifiedExpert: "Verified Expert in Environmental",
      previousCompany: "Barrick",
      companyName: "Barrick Gold Corporation",
      image: "/images/team4.jpg",
    },
    {
      name: "Henery Marcel",
      role: "Mining Engineer",
      verifiedExpert: "Verified Expert in Mining",
      previousCompany: "Vale",
      companyName: "Vale S.A.",
      image: "/images/team5.jpg",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            <span className="text-emerald-600">Meet Talent</span> in Our Network
          </h2>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.name
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">{tab.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {talentData.map((talent, index) => (
            <TalentCard key={index} {...talent} />
          ))}

          <DiscoveryCard />
        </div>
      </div>
    </section>
  );
};

export default TalentNetwork;
