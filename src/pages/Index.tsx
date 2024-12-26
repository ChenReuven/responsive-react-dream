import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white"
    >
      <Header />
      <Hero />
      <Features />
      <Footer />
    </motion.div>
  );
};

export default Index;