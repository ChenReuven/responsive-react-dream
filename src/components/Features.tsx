import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "A shopping tool that does all the work",
      description: "Add Honey to your browser in seconds and we'll search for coupons and instantly apply them to your cart.",
      image: "/placeholder.svg",
    },
    {
      title: "Apply coupons with a click",
      description: "We'll scan all the coupons to find you working codes with automatically apply the best to your cart.",
      image: "/placeholder.svg",
    },
    {
      title: "Earn gift cards just for shopping",
      description: "Score Gold Rewards at your eligible purchases at some of your favorite stores. Once you earn enough, redeem them for gift cards!",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F1F0FB]">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-12 mb-32 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#6366F1]">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
            <div className="flex-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#6366F1] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative w-full aspect-square bg-white rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;