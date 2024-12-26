import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
            Love deals? You came to the right place.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Find better discounts faster with our smart shopping tool. Save time and money on every purchase.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-hover transition-colors duration-300"
          >
            Add to Chrome - It's Free
          </motion.button>
        </motion.div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto opacity-75">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="w-24 h-24 bg-white rounded-xl shadow-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;