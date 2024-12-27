import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
                PayPal honey
              </span>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Accessibility
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Log in
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              Add to Chrome — It's Free
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;