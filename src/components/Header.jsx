import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-emerald-600">
              GeoEspace
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Top 5%
            </a>
            <div className="relative group">
              <a
                href="#"
                className="text-gray-700 hover:text-emerald-600 font-medium flex items-center"
              >
                Hire Talent
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Consulting & Service
            </a>
            <Link
              to="/clients"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              Clients
            </Link>
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              blog
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              About Us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-emerald-600 font-medium hidden md:block"
            >
              Apply as a Freelancer
            </a>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
              Hire Top Talent
            </button>
            <button className="text-gray-700 hover:text-emerald-600 font-medium">
              Log In
            </button>
          </div>

          <div className="lg:hidden">
            <button className="text-gray-700">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
