import { useState } from "react";

const ConsultingServicesPage = () => {
  const [activeTab, setActiveTab] = useState("On Demand Hired");

  const companyLogos = [
    "CNESST",
    "OGQ",
    "AEMQ",
    "Wallbridge Mining",
    "OGQ",
    "AEMQ",
  ];

  const servicesTags = [
    "Geotechnical Engineering",
    "Environmental Consulting",
    "GIS Analysis & Mapping",
    "Environmental Consulting",
    "GIS Analysis & Mapping",
    "GIS Analysis & Mapping",
    "Geological Field & Lab Work",
    "Geotechnical Engineering",
    "GIS Analysis & Mapping",
    "Mining & Mineral Exploration",
    "GIS Analysis & Mapping",
    "Geological Field & Lab Work",
    "Soil Science",
    "GIS Analysis & Mapping",
  ];

  const teamMembers = [
    {
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      image: "/images/team1.jpg",
    },
    {
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      image: "/images/team2.png",
    },
    {
      name: "Zane Sorell",
      title: "CTO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      image: "/images/team1.jpg",
    },
    {
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      image: "/images/team2.png",
    },
    {
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      image: "/images/team1.jpg",
    },
    {
      name: "Zane Sorell",
      title: "CTO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      image: "/images/team2.png",
    },
  ];

  const workProcessSteps = [
    {
      step: "01",
      title: "Discover",
      description:
        "Our first phase involves conducting a comprehensive English & French language and communication interview/evaluation. We also assess personality traits, looking for candidates who are passionate and fully engaged in their work.",
    },
    {
      step: "02",
      title: "Define",
      description:
        "We also test each applicant's technical knowledge and problem-solving ability through various assessments. Every member of the GeoEspace network is an expert in their domain, and we typically only advance candidates with exceptional results in this phase.",
    },
    {
      step: "03",
      title: "Develop",
      description:
        "Each candidate is interviewed by GeoEspace screeners who are experts in their functional domain. Our screeners provide specific live exercises, looking for problem-solving ability, depth of experience, communication ability, and creativity.",
    },
  ];

  const blogPosts = Array(6).fill({
    category: "Geoscience",
    title: "Geoscience presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    image: "/images/consulting2.png",
    avatar: "/images/avatar1.png",
  });

  const servicesList = [
    "Geotechnical Engineers",
    "Geologists (Field & Lab)",
    "Environmental Consultants",
    "CAD Technicians (Geology & Mining)",
    "Environmental Consultants",
    "Remote Sensing Specialists",
    "Environmental Consultants",
    "CAD Technicians (Geology & Mining)",
    "Environmental Consultants",
    "Remote Sensing Specialists",
    "Geotechnical Engineers",
    "Remote Sensing Specialists",
    "Geotechnical Engineers",
    "Remote Sensing Specialists",
    "Geotechnical Engineers",
    "Geotechnical Engineers",
    "Environmental Consultants",
    "GIS Analysts",
    "Geotechnical Engineers",
    "Geologists (Field & Lab)",
    "CAD Technicians (Geology & Mining)",
    "CAD Technicians (Geology & Mining)",
    "CAD Technicians (Geology & Mining)",
    "CAD Technicians (Geology & Mining)",
    "Soil Scientists",
    "Soil Scientists",
    "Soil Scientists",
    "Soil Scientists",
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-emerald-600 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                World-class Services
                <br />
                Across Industry
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                GeoEspace provides companies with comprehensive support to solve
                their business challenges—from technology and marketing services
                to management consulting. GeoEspace is more than a talent
                platform; it is a strategic partner for success in the geology,
                mining, environmental, and petroleum sectors.
              </p>
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Get a Free Consultation Now
              </button>
            </div>
            <div className="relative">
              <img
                src="/images/consulting1.png"
                alt="Consulting Services"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-white/30 transition-colors">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-emerald-600 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <span>Watch this Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-center mb-8">
            Trusted By Leading Brands and Start Ups
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            {companyLogos.map((logo, index) => (
              <div key={index} className="text-white font-semibold text-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold mb-4">
              OUR CONSULTING & SERVICES
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Browse the Full Range of{" "}
              <span className="text-emerald-600">Our Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our portfolio of services helps you reach your business
              objectives—whether that's business transformation, accelerating
              growth, or streamlining business operations.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Accelerate Growth With GeoEspace's Expert Geo-Environmental
              Freelancers
            </h3>
            <p className="text-gray-600 mb-8">
              GeoEspace connects you with top-tier freelance experts in
              geoscience, environment, mining, and spatial data.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {servicesTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm border border-emerald-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Explore GeoEspace
            </button>
          </div>

          <div className="mb-16">
            <p className="text-emerald-600 font-semibold mb-4">
              FEATURED CASE STUDY
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              TerraCore Solutions streamlines site assessments with GeoEspace
              experts
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              TerraCore Solutions needed specialized support for multiple
              environmental site assessments across remote regions. By
              partnering with GeoEspace, they gained access to top-tier
              hydrogeologists, GIS analysts, and environmental consultants who
              delivered fast, accurate insights. The result? Improved data
              quality, reduced reporting time, and smoother compliance – all
              while staying on budget.
            </p>
            <img
              src="/images/consulting2.png"
              alt="TerraCore Solutions Case Study"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-white/80 font-semibold mb-4">
              OUR CONSULTING & SERVICES
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Flexible and Reliable Solutions for Every Project Need
            </h2>
            <p className="text-white/90 mb-8">
              We take care of your entire project—from planning and execution to
              final reporting.
            </p>

            <div className="flex justify-center mb-12">
              <div className="bg-white/10 p-1 rounded-lg flex">
                <button
                  onClick={() => setActiveTab("On Demand Hired")}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    activeTab === "On Demand Hired"
                      ? "bg-emerald-700 text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  On Demand Hired
                </button>
                <button
                  onClick={() => setActiveTab("Managed Delivery by Us")}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    activeTab === "Managed Delivery by Us"
                      ? "bg-white text-emerald-600"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Managed Delivery by Us
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">f</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">t</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">in</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Work Process
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our teams, with experience across a wide-range of industries and
              sectors, develop and deploy tailored solutions to meet your
              business needs and unique industry demands for sustainable results
              and long-term success.
            </p>
          </div>

          <div className="space-y-16">
            {workProcessSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-12"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {index === 0 && (
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                      {index === 1 && (
                        <path d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      )}
                      {index === 2 && (
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                  </div>
                  {index < workProcessSteps.length - 1 && (
                    <div className="hidden lg:block w-px h-24 bg-gray-200 ml-8"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-emerald-600 font-semibold mr-4">
                      Step
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h2 className="text-3xl font-bold text-white mb-6 lg:mb-0">
              Flexible and Reliable Solutions for
              <br />
              Every Project Need
            </h2>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center">
              Get a Free Consultation Now
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-emerald-600">Counsaltancy</span> Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The GeoEspace Blog is a trusted space for curious minds, sharing
              expert insights, practical tutorials, and thought-provoking
              content. It's where innovation meets clarity—helping readers stay
              informed, inspired, and ahead of the curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-emerald-600 text-sm font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                    {post.title}
                    <svg
                      className="w-5 h-5 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(3, 6).map((post, index) => (
              <div
                key={index + 3}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-emerald-600 text-sm font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                    {post.title}
                    <svg
                      className="w-5 h-5 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center mx-auto">
              Explore all Blogs
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                From strategy to execution,
                <br />
                we're ready to deliver excellence.
              </h2>
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center">
                Get a Free Consultation Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-emerald-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  25,000+
                </div>
                <div className="text-white/80">CLIENTS SERVED</div>
              </div>
              <div className="bg-emerald-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  25,000+
                </div>
                <div className="text-white/80">GLOBAL TALENT</div>
              </div>
              <div className="bg-emerald-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  25,000+
                </div>
                <div className="text-white/80">CLIENTS SERVED</div>
              </div>
              <div className="bg-emerald-700 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  25,000+
                </div>
                <div className="text-white/80">GLOBAL TALENT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Flexible and Reliable Solutions for Every Project Need
            </h2>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center">
              Get a Free Consultation Now
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Explore Our Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingServicesPage;
