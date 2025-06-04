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
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
        <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center">
          <span className="text-emerald-600 font-bold text-lg">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
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

const DiscoveryCard = () => {
  return (
    <div className="bg-emerald-600 text-white rounded-xl p-8 flex flex-col justify-center h-full">
      <div className="text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
          <FaLightbulb className="w-10 h-10 text-yellow-400" />
        </div>

        <h3 className="text-2xl font-bold mb-2">Discover 50,000+</h3>
        <h4 className="text-xl font-semibold mb-4">More Talent</h4>
        <p className="text-emerald-100">in the Geospace Network</p>
      </div>
    </div>
  );
};

const TalentNetwork = () => {
  const [activeTab, setActiveTab] = useState("Electrician");

  const tabs = [
    { name: "Electrician", icon: <FaBolt className="w-4 h-4" /> },
    { name: "Environment Specialist", icon: <FaLeaf className="w-4 h-4" /> },
    { name: "Petroleum Expert", icon: <FaOilCan className="w-4 h-4" /> },
    { name: "Technician", icon: <FaCog className="w-4 h-4" /> },
    { name: "Miner", icon: <FaHardHat className="w-4 h-4" /> },
    { name: "Engineer", icon: <FaUserTie className="w-4 h-4" /> },
    { name: "Geologist", icon: <FaHardHat className="w-4 h-4" /> },
  ];

  const talentData = [
    {
      name: "Ric Saltzman",
      role: "Coal Miner",
      verifiedExpert: "Verified Expert in Mining",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
    },
    {
      name: "Ric Saltzman",
      role: "Coal Miner",
      verifiedExpert: "Verified Expert in Mining",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
    },
    {
      name: "Henery Marcel",
      role: "Coal Miner",
      verifiedExpert: "Verified Expert in Mining",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-emerald-600">Meet Talent</span> in Our Network
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.name
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
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
