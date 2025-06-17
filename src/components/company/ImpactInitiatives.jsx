const ImpactInitiatives = () => {
  const initiatives = [
    {
      image: "/images/initiative1.png",
      title: "Top Volunteer",
      description:
        "GeoEspace leverages its elite network of top geoscience and mining professionals to empower global NGOs, charities, and nonprofit organizations. By connecting these organizations with world-class freelance talent, we accelerate sustainable development, drive social and environmental impact, and give back to communities in need.",
      buttonText: "Explore all Blogs",
      buttonIcon: "→",
    },
    {
      image: "/images/initiative2.png",
      title: "Press Center",
      description:
        "At GeoEspace, we mobilize our global network of elite geologists, mining experts, and environmental professionals to support NGOs, nonprofits, and humanitarian projects worldwide. Whether it's advancing clean resource development, supporting sustainable land use, or aiding in crisis response, we connect mission-driven organizations with the specialized expertise they need to make a lasting difference where it matters most.",
      buttonText: "Explore all Blogs",
      buttonIcon: "→",
    },
  ];

  return (
    <div className="space-y-8">
      {initiatives.map((initiative, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
        >
          <div className="aspect-[2/1] w-full">
            <img
              src={initiative.image}
              alt={initiative.title}
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {initiative.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-4xl mx-auto">
              {initiative.description}
            </p>
            <button className="bg-[#368468] text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200 inline-flex items-center space-x-2">
              <span>{initiative.buttonText}</span>
              <span>{initiative.buttonIcon}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactInitiatives;
