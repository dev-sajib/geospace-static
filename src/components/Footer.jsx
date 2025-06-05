import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-emerald-300">geo</span>espace
            </h3>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Hire Freelancer</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Miners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Geologists
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Engineer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Technician
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Civil Engineer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Data Specialist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Professional Drillers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Petroleum Experts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Environment Specialist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Apply</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Apply as a Freelancer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Apply as a Company
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Hire Freelancer</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Refund/Replacement Policies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Insurance for freelancers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Replacement Guarantee
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Insurance Professional Liability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  Tax Declaration Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white text-sm transition-colors"
                >
                  CNESST permit: AP-2403995
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-emerald-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-emerald-200 text-sm">
                    222 Rue Poirier, J7R 6B1,
                  </p>
                  <p className="text-emerald-200 text-sm">Canada</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <div>
                  <p className="text-emerald-200 text-sm">+1(514) 571-8238</p>
                  <p className="text-emerald-200 text-sm">
                    Fax +1(514-291-8063
                  </p>
                  <p className="text-emerald-200 text-sm">
                    Whats app: +1514-588-8238
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <p className="text-emerald-200 text-sm">admin@geoespace.ca</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-12 pt-8 mb-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-emerald-200 hover:text-white text-sm transition-colors"
              >
                Why GeoEspace
              </a>
              <Link
                to="/press-releases"
                className="text-emerald-200 hover:text-white text-sm transition-colors"
              >
                Press Center
              </Link>
              <a
                href="#"
                className="text-emerald-200 hover:text-white text-sm transition-colors"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-emerald-200 hover:text-white text-sm transition-colors"
              >
                About Us
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link
              to="/privacy-policy"
              className="text-emerald-200 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="#"
              className="text-emerald-200 hover:text-white text-sm transition-colors"
            >
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
