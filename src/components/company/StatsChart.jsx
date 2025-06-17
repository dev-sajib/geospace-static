const StatsChart = () => {
  const talentApplications = [
    { year: "2023", value: "5264564+", active: false },
    { year: "2025", value: "5264564+", active: true },
    { year: "2024", value: "5264564+", active: false },
  ];

  const chartData = [
    {
      title: "Total Talent Engagements",
      bars: [
        { year: "2022", value: 50000, color: "bg-emerald-300" },
        { year: "2023", value: 40000, color: "bg-emerald-300" },
        { year: "2024", value: 60000, color: "bg-[#368468]" },
        { year: "2025", value: 50000, color: "bg-emerald-300" },
        { year: "2025", value: 50000, color: "bg-emerald-300" },
      ],
    },
    {
      title: "Number of Days Talent Were Engaged",
      bars: [
        { year: "2022", value: 35000, color: "bg-emerald-300" },
        { year: "2023", value: 40000, color: "bg-emerald-300" },
        { year: "2023", value: 40000, color: "bg-emerald-300" },
        { year: "2025", value: 50000, color: "bg-emerald-300" },
        { year: "2025", value: 50000, color: "bg-[#368468]" },
      ],
    },
    {
      title: "Footprint of Talent Network",
      bars: [
        { year: "2022", value: 50000, color: "bg-emerald-300" },
        { year: "2023", value: 40000, color: "bg-emerald-300" },
        { year: "2024", value: 60000, color: "bg-[#368468]" },
        { year: "2025", value: 50000, color: "bg-emerald-300" },
      ],
    },
    {
      title: "Clients Served",
      bars: [
        { year: "2022", value: 35000, color: "bg-emerald-300" },
        { year: "2023", value: 50000, color: "bg-emerald-300" },
        { year: "2023", value: 50000, color: "bg-emerald-300" },
        { year: "2025", value: 50000, color: "bg-emerald-300" },
        { year: "2024", value: 60000, color: "bg-[#368468]" },
      ],
    },
  ];

  const milestones = [
    {
      value: "$26,531",
      description:
        "In 2023, we successfully generated $26,531 in total revenue.",
      active: false,
    },
    {
      value: "50%",
      description: "2024 marked a major achievement.",
      active: true,
    },
    {
      value: "525,653+",
      description:
        "In 2025, our platform experienced exceptional growth, crossing 525,653+ total applications.",
      active: false,
    },
    {
      value: "50%",
      description: "2025 marked a major achievement with 50%.",
      active: true,
    },
  ];

  const maxValue = 60000;

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
          Talent Applications Received
        </h3>
        <div className="flex justify-center items-center space-x-4">
          {talentApplications.map((item, index) => (
            <div
              key={index}
              className={`px-6 py-4 rounded-full border-2 ${
                item.active
                  ? "bg-[#368468] text-white border-emerald-600"
                  : "bg-white text-gray-600 border-gray-200"
              }`}
            >
              <div className="text-center">
                <div className="text-sm font-medium mb-1">{item.year}</div>
                <div className="text-lg font-bold">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {chartData.map((chart, chartIndex) => (
          <div key={chartIndex}>
            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              {chart.title}
            </h4>
            <div className="flex items-end justify-center space-x-6 h-64">
              {chart.bars.map((bar, barIndex) => (
                <div key={barIndex} className="flex flex-col items-center">
                  <div className="text-xs text-emerald-600 font-medium mb-2">
                    {bar.value >= 60000 && "60000+"}
                    {bar.value >= 50000 && bar.value < 60000 && "50000+"}
                    {bar.value >= 40000 && bar.value < 50000 && "40000+"}
                    {bar.value < 40000 && "35000+"}
                  </div>
                  <div
                    className={`w-12 ${bar.color} rounded-t-md relative`}
                    style={{
                      height: `${(bar.value / maxValue) * 200}px`,
                    }}
                  ></div>
                  <div className="text-xs text-gray-600 mt-2">{bar.year}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-xl font-semibold text-gray-900 text-center mb-8">
          Key Milestones
        </h4>
        <div className="flex justify-center items-start space-x-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center max-w-xs">
              <div className="flex justify-center mb-4">
                <div
                  className={`w-3 h-3 rounded-full ${
                    milestone.active ? "bg-[#368468]" : "bg-emerald-300"
                  }`}
                ></div>
              </div>
              <div
                className={`text-2xl font-bold mb-2 ${
                  milestone.active ? "text-emerald-600" : "text-emerald-300"
                }`}
              >
                {milestone.value}
              </div>
              <p className="text-sm text-gray-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsChart;
