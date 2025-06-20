import { useState } from "react";

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
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-left line-clamp-1">
          {name}
        </h3>

        <div className="flex items-center mb-3">
          <img
            src="/images/varified-badge.svg"
            alt="Verified Expert"
            className="w-32 h-8 sm:w-36 sm:h-9 lg:w-40 lg:h-10 object-contain"
          />
        </div>

        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-left flex-grow">
          {role}
        </p>

        <div className="text-xs sm:text-sm text-gray-500 text-left mt-auto">
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
    <div className="bg-[#368468] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-center h-full min-h-[280px]">
      <div className="text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <img
            src="/images/bulb 1.svg"
            alt="Lightbulb"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
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
    {
      name: "Electrician",
      icon: (
        <img
          src="/images/electrician.svg"
          alt="Electrician"
          className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
        />
      ),
    },
    {
      name: "Environment Specialist",
      icon: (
        <img
          src="/images/env-sp.svg"
          alt="Environment Specialist"
          className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
        />
      ),
    },
    {
      name: "Petroleum Expert",
      icon: (
        <img
          src="/images/petroleum.svg"
          alt="Petroleum Expert"
          className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
        />
      ),
    },
    {
      name: "Technician",
      icon: (
        <img
          src="/images/technician.svg"
          alt="Technician"
          className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
        />
      ),
    },
    {
      name: "Miner",
      icon: (
        <img
          src="/images/miner.svg"
          alt="Miner"
          className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
        />
      ),
    },
    {
      name: "Engineer",
      icon: (
        <img
          src="/images/engineer.svg"
          alt="Engineer"
          className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
        />
      ),
    },
    {
      name: "Geologist",
      icon: (
        <img
          src="/images/geologist.svg"
          alt="Geologist"
          className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
        />
      ),
    },
  ];

  const talentDataByCategory = {
    Electrician: [
      {
        name: "James Wilson",
        role: "Senior Electrician",
        verifiedExpert: "Verified Expert in Electrical",
        previousCompany: "Hydro-Québec",
        companyName: "Hydro-Québec Corporation",
        image: "/images/team3.jpg",
      },
      {
        name: "Sarah Thompson",
        role: "Industrial Electrician",
        verifiedExpert: "Verified Expert in Industrial",
        previousCompany: "ABB",
        companyName: "ABB Power Systems",
        image: "/images/team4.jpg",
      },
      {
        name: "Mike Davis",
        role: "Power Systems Specialist",
        verifiedExpert: "Verified Expert in Power",
        previousCompany: "Schneider",
        companyName: "Schneider Electric",
        image: "/images/team5.jpg",
      },
    ],
    "Environment Specialist": [
      {
        name: "Maria Rodriguez",
        role: "Environmental Specialist",
        verifiedExpert: "Verified Expert in Environmental",
        previousCompany: "Barrick",
        companyName: "Barrick Gold Corporation",
        image: "/images/team4.jpg",
      },
      {
        name: "David Green",
        role: "Water Quality Analyst",
        verifiedExpert: "Verified Expert in Water",
        previousCompany: "Environment Canada",
        companyName: "Environment and Climate Change",
        image: "/images/team3.jpg",
      },
      {
        name: "Lisa Park",
        role: "Soil Contamination Expert",
        verifiedExpert: "Verified Expert in Soil",
        previousCompany: "Golder",
        companyName: "Golder Associates",
        image: "/images/team5.jpg",
      },
    ],
    "Petroleum Expert": [
      {
        name: "Robert Chen",
        role: "Petroleum Engineer",
        verifiedExpert: "Verified Expert in Petroleum",
        previousCompany: "Suncor",
        companyName: "Suncor Energy",
        image: "/images/team5.jpg",
      },
      {
        name: "Amanda Foster",
        role: "Reservoir Engineer",
        verifiedExpert: "Verified Expert in Reservoir",
        previousCompany: "Imperial Oil",
        companyName: "Imperial Oil Limited",
        image: "/images/team3.jpg",
      },
      {
        name: "Kevin Smith",
        role: "Drilling Engineer",
        verifiedExpert: "Verified Expert in Drilling",
        previousCompany: "Husky",
        companyName: "Husky Energy",
        image: "/images/team4.jpg",
      },
    ],
    Technician: [
      {
        name: "Carlos Martinez",
        role: "Mining Technician",
        verifiedExpert: "Verified Expert in Technical",
        previousCompany: "Agnico Eagle",
        companyName: "Agnico Eagle Mines",
        image: "/images/team4.jpg",
      },
      {
        name: "Jennifer Lee",
        role: "Laboratory Technician",
        verifiedExpert: "Verified Expert in Lab",
        previousCompany: "ALS",
        companyName: "ALS Laboratory Group",
        image: "/images/team5.jpg",
      },
      {
        name: "Paul Anderson",
        role: "Equipment Technician",
        verifiedExpert: "Verified Expert in Equipment",
        previousCompany: "Caterpillar",
        companyName: "Caterpillar Inc.",
        image: "/images/team3.jpg",
      },
    ],
    Miner: [
      {
        name: "Ric Saltzman",
        role: "Coal Miner",
        verifiedExpert: "Verified Expert in Mining",
        previousCompany: "Teck",
        companyName: "Teck Resources Limited",
        image: "/images/team3.jpg",
      },
      {
        name: "John Murphy",
        role: "Underground Miner",
        verifiedExpert: "Verified Expert in Underground",
        previousCompany: "Vale",
        companyName: "Vale S.A.",
        image: "/images/team4.jpg",
      },
      {
        name: "Steve Johnson",
        role: "Surface Miner",
        verifiedExpert: "Verified Expert in Surface",
        previousCompany: "Goldcorp",
        companyName: "Goldcorp Inc.",
        image: "/images/team5.jpg",
      },
    ],
    Engineer: [
      {
        name: "Henery Marcel",
        role: "Mining Engineer",
        verifiedExpert: "Verified Expert in Engineering",
        previousCompany: "Vale",
        companyName: "Vale S.A.",
        image: "/images/team5.jpg",
      },
      {
        name: "Rachel Kim",
        role: "Civil Engineer",
        verifiedExpert: "Verified Expert in Civil",
        previousCompany: "SNC-Lavalin",
        companyName: "SNC-Lavalin Group",
        image: "/images/team3.jpg",
      },
      {
        name: "Tom Brown",
        role: "Mechanical Engineer",
        verifiedExpert: "Verified Expert in Mechanical",
        previousCompany: "Bombardier",
        companyName: "Bombardier Inc.",
        image: "/images/team4.jpg",
      },
    ],
    Geologist: [
      {
        name: "Dr. Emily Watson",
        role: "Senior Geologist",
        verifiedExpert: "Verified Expert in Geology",
        previousCompany: "Barrick",
        companyName: "Barrick Gold Corporation",
        image: "/images/team4.jpg",
      },
      {
        name: "Michael Stone",
        role: "Exploration Geologist",
        verifiedExpert: "Verified Expert in Exploration",
        previousCompany: "Newmont",
        companyName: "Newmont Corporation",
        image: "/images/team5.jpg",
      },
      {
        name: "Sandra Hill",
        role: "Structural Geologist",
        verifiedExpert: "Verified Expert in Structural",
        previousCompany: "Rio Tinto",
        companyName: "Rio Tinto Group",
        image: "/images/team3.jpg",
      },
    ],
  };

  const currentTalentData =
    talentDataByCategory[activeTab] || talentDataByCategory["Electrician"];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
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
                    ? "bg-[#368468] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">
                  {tab.name.includes(" ") ? tab.name.split(" ")[0] : tab.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentTalentData.map((talent, index) => (
            <TalentCard key={index} {...talent} />
          ))}

          <DiscoveryCard />
        </div>
      </div>
    </section>
  );
};

export default TalentNetwork;
