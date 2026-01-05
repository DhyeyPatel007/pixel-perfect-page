import { motion } from "framer-motion";
import skyBlueHamper from "@/assets/skybluehamper.png";
import roseHamper from "@/assets/rosehamper.png";
import blueHamper from "@/assets/bluehamper.jpg";
import lavenderHamper from "@/assets/lavenderhamper.png";
import yellowHamper from "@/assets/yellowhamper.png";
import darkPinkHamper from "@/assets/darkpinkhamper.png";

const collections = [
  {
    id: 1,
    name: "The Ocean Breeze Set",
    description: "Cool tones of satin and florals for a calm, elegant look.",
    image: skyBlueHamper,
    bgColor: "bg-sky-blue",
  },
  {
    id: 2,
    name: "The Blush Edition",
    description: "Soft pink essentials curated for a touch of everyday sweetness.",
    image: roseHamper,
    bgColor: "bg-rose",
  },
  {
    id: 3,
    name: "The Royal Navy Set",
    description: "A classic collection of deep blue satin and matching accessories.",
    image: blueHamper,
    bgColor: "bg-navy/20",
  },
  {
    id: 4,
    name: "The Lilac Dream",
    description: "Pastel purple hues blended with satin luxury for a soft touch.",
    image: lavenderHamper,
    bgColor: "bg-lavender",
  },
  {
    id: 5,
    name: "The Sunshine Edition",
    description: "Bright and cheerful accessories to light up your day.",
    image: yellowHamper,
    bgColor: "bg-sunshine",
  },
  {
    id: 6,
    name: "The Deep Rose Edition",
    description: "Rich, romantic pink tones for a bold and elegant look.",
    image: darkPinkHamper,
    bgColor: "bg-rose",
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-16 md:py-24 bg-blush/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold">
            <span className="font-script text-coral text-3xl md:text-4xl lg:text-5xl">C</span>
            ollections
          </h2>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className={`${collection.bgColor} rounded-3xl p-4 md:p-6 overflow-hidden transition-transform duration-300 hover:scale-[1.02]`}
              >
                <div className="aspect-square relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="text-center mt-4 px-2">
                <h3 className="font-heading font-semibold text-sm md:text-base text-foreground mb-1">
                  {collection.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
