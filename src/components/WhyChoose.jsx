import { FaPlay } from "react-icons/fa";

const VideoCard = ({ backgroundImage, title = "Watch Now", videoId }) => {
  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className={`w-full h-full ${backgroundImage} bg-cover bg-center`}>
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-800 ml-1" />
          </div>
        </div>

        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <p className="text-white font-medium text-xs sm:text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

const WhyChoose = () => {
  const videos = [
    {
      id: 1,
      backgroundImage:
        "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
      title: "Watch Now",
    },
    {
      id: 2,
      backgroundImage:
        "bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600",
      title: "Watch Now",
    },
    {
      id: 3,
      backgroundImage:
        "bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600",
      title: "Watch Now",
    },
    {
      id: 4,
      backgroundImage:
        "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600",
      title: "Watch Now",
    },
    {
      id: 5,
      backgroundImage:
        "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600",
      title: "Watch Now",
    },
    {
      id: 6,
      backgroundImage:
        "bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600",
      title: "Watch Now",
    },
    {
      id: 7,
      backgroundImage: "bg-gradient-to-br from-red-400 via-red-500 to-red-600",
      title: "Watch Now",
    },
    {
      id: 8,
      backgroundImage:
        "bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600",
      title: "Watch Now",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Organizations Choose{" "}
            <span className="text-emerald-600">GeoEspace</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how our clients are leveraging the power of Geoespace to
            unlock new possibilities and drive success across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              backgroundImage={video.backgroundImage}
              title={video.title}
              videoId={video.id}
            />
          ))}
        </div>

        {/* <div className="text-center mt-12 sm:mt-16">
          <button className="bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Success Stories
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChoose;
