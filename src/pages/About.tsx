import { motion } from "framer-motion";

const About = () => {
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
            About PayPal Honey
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              PayPal Honey is a free browser extension that automatically finds and applies 
              the best coupon codes when you shop online. We're on a mission to help people 
              save time and money on their online purchases.
            </p>

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Laptop showing code"
              className="w-full rounded-xl shadow-lg mb-8"
            />

            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Since our founding, we've helped millions of members save money while shopping 
              at their favorite stores. Now as part of PayPal, we're able to offer even more 
              ways to save and earn rewards.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We believe everyone deserves to get the best deal possible when shopping online. 
              That's why we've built powerful technology that works behind the scenes to help 
              you save money without having to search for coupon codes yourself.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;