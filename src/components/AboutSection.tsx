import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold mb-4">
              <span className="font-script text-coral text-3xl md:text-4xl lg:text-5xl">A</span>
              bout{" "}
              <span className="font-script text-peach text-3xl md:text-4xl lg:text-5xl">U</span>
              s
            </h2>
          </div>

          {/* Main Heading */}
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold mb-6 leading-tight">
            From a Simple Idea to Your{" "}
            <span className="font-script text-coral text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Doorstep
            </span>
            .
          </h3>

          <p className="text-sm md:text-base text-muted-foreground mb-8">
            The journey of PaperFellows and where we are going next.
          </p>

          {/* Story Content */}
          <div className="space-y-6 text-left md:text-center">
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              "<span className="font-script text-coral text-lg">PaperFellows</span> began with a simple observation: finding high-quality, perfectly color-coordinated accessories was harder than it should be. We wanted to remove the hassle of "mixing and matching" by curating{" "}
              <span className="font-semibold">aesthetic hampers</span> that look beautiful the moment you open the box. What started as a small passion project in Gujarat has grown into a brand loved for its attention to detail."
            </p>

            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              We are just getting started. Our vision is to become your go-to destination for aesthetic gifting in India. We are working on expanding our collections to include more pastel themes, personalized add-ons, and eventually, a full range of lifestyle essentials. We want to build not just a brand, but a community that appreciates the little beautiful things in life.
            </p>
          </div>

          {/* Signature */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-sm text-muted-foreground italic"
          >
            Created with Lots of Love - Rishi Patel
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
