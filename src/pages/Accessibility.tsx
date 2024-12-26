import { motion } from "framer-motion";

const Accessibility = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white pt-16"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#6366F1]">
            Accessibility
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              At PayPal Honey, we're committed to making our services accessible to everyone. 
              We believe in creating an inclusive experience that accommodates all users, 
              regardless of their abilities.
            </p>

            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Person using laptop"
              className="w-full rounded-xl shadow-lg mb-8"
            />

            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-6">
              We strive to ensure our browser extension and website meet WCAG 2.1 AA standards. 
              This includes providing features such as keyboard navigation, screen reader 
              compatibility, and high contrast modes.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Color contrast compliance</li>
              <li>Resizable text support</li>
              <li>Alternative text for images</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
            <p className="text-gray-600">
              We're always looking to improve our accessibility features. If you encounter any 
              issues or have suggestions for improvement, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Accessibility;