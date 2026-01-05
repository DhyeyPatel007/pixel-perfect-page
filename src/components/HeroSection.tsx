import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/rosehamper.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen gradient-hero pt-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12 lg:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 backdrop-blur-sm mb-6">
              <span className="text-lg">🏆</span>
              <span className="text-xs md:text-sm font-medium text-foreground/80">
                #1 in Gujarat in the category.
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-outfit font-semibold leading-tight mb-4">
              We Craft{" "}
              <span className="font-script text-coral text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Hampers
              </span>
              <br />
              For every{" "}
              <span className="text-peach font-outfit text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                occasion.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8">
              We craft unique paper bouquets, gift hamper, custom gifts
              and custom crafts for your special one.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#collections"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-primary-foreground font-medium text-sm hover:bg-foreground/90 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/916353824179"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 bg-background/30 backdrop-blur-sm font-medium text-sm text-foreground hover:bg-background/50 transition-all duration-300"
              >
                WhatsApp
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
              {/* Background blur circle */}
              <div className="absolute inset-0 bg-rose/50 rounded-full blur-3xl scale-110" />
              
              {/* Circle container with stroke */}
              <div className="relative w-full h-full rounded-full border-4 border-coral/40 overflow-hidden bg-rose/20 backdrop-blur-sm shadow-2xl">
                {/* Main image fitted in circle */}
                <motion.img
                  src={heroImage}
                  alt="PaperFellows Rose Hamper - Beautiful gift box with pink accessories"
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blush/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
