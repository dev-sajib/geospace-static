import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 w-8 h-8 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <FaTimes className="w-4 h-4 text-white" />
        </button>

        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`${videoUrl}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const VideoCard = ({
  backgroundImage,
  title = "Watch Now",
  videoId,
  onClick,
}) => {
  return (
    <div
      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-all duration-200"
      onClick={onClick}
    >
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-95 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 mb-2">
            <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 ml-0.5" />
          </div>
          <p className="text-white font-medium text-sm drop-shadow-lg">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const WhyChoose = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const videoUrl =
    "https://www.youtube.com/embed/FWjAbqBWT3k?si=YYHdpbGeTWNeFWAT";

  const handleVideoClick = () => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl("");
  };

  const videos = [
    {
      id: 1,
      backgroundImage: "/images/choose-ge1.jpg",
      title: "Watch Now",
    },
    {
      id: 2,
      backgroundImage: "/images/choose-ge1.jpg",
      title: "Watch Now",
    },
    {
      id: 3,
      backgroundImage: "/images/choose-ge1.jpg",
      title: "Watch Now",
    },
    {
      id: 4,
      backgroundImage: "/images/choose-ge1.jpg",
      title: "Watch Now",
    },
    {
      id: 5,
      backgroundImage: "/images/choose-ge2.jpg",
      title: "Watch Now",
    },
    {
      id: 6,
      backgroundImage: "/images/choose-ge2.jpg",
      title: "Watch Now",
    },
    {
      id: 7,
      backgroundImage: "/images/choose-ge2.jpg",
      title: "Watch Now",
    },
    {
      id: 8,
      backgroundImage: "/images/choose-ge2.jpg",
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
              onClick={handleVideoClick}
            />
          ))}
        </div>

        {/* <div className="text-center mt-12 sm:mt-16">
          <button className="bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Success Stories
          </button>
        </div> */}
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={currentVideoUrl}
      />
    </section>
  );
};

export default WhyChoose;
