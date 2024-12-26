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
    <section className="py-20 bg-white">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{feature.title}</h2>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
            <div className="flex-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="w-full aspect-square bg-muted rounded-2xl overflow-hidden">
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