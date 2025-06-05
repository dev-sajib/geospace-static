import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const TeamMemberCard = ({
  image,
  name,
  title,
  description,
  socialLinks = { facebook: "#", github: "#", linkedin: "#" },
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-emerald-600 font-medium text-sm mb-3">{title}</p>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex space-x-3">
          <a
            href={socialLinks.facebook}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
          >
            <FaFacebook className="w-4 h-4" />
          </a>
          <a
            href={socialLinks.github}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={socialLinks.linkedin}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
