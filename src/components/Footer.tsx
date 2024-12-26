import { motion } from "framer-motion";

const Footer = () => {
  const sections = [
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Product",
      links: ["Browser", "Mobile App", "How it Works", "Support"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security"],
    },
    {
      title: "Follow Us",
      links: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
    },
  ];

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <img src="/placeholder.svg" alt="App Store" className="h-10" />
              <img src="/placeholder.svg" alt="Play Store" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;