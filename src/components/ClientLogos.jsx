const ClientLogos = () => {
  const clients = [
    { name: "Wallbridge", logo: "/api/placeholder/120/60" },
    { name: "Axis", logo: "/api/placeholder/120/60" },
    { name: "CNESST", logo: "/api/placeholder/120/60" },
    { name: "AEIQ", logo: "/api/placeholder/120/60" },
    { name: "AMQ", logo: "/api/placeholder/120/60" },
    { name: "CNESST", logo: "/api/placeholder/120/60" },
    { name: "AEIQ", logo: "/api/placeholder/120/60" },
    { name: "Wallbridge", logo: "/api/placeholder/120/60" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Trusted by <span className="text-emerald-600">100+ Clients</span>{" "}
          Worldwide
        </h2>
        <p className="text-gray-600 mb-12">
          Brands and professionals rely on us for quality, reliability, and
          results.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
