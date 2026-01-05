import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    text: "I ordered the Sunshine Edition for my best friend's birthday and she was obsessed! The packaging felt so premium, and the handwritten note was such a sweet touch. Definitely ordering again for Rakhi!",
    name: "Ananya Shah",
    role: "College Student",
    initials: "AS",
    color: "bg-peach",
  },
  {
    id: 2,
    text: "Finally found a brand that actually understands 'aesthetic'. The Lavender set looks exactly like the photos. The satin quality is amazing — so soft and doesn't pull my hair at all. 10/10 recommended.",
    name: "Dhruvil Patel",
    role: "Shopkeeper",
    initials: "DP",
    color: "bg-lavender",
  },
  {
    id: 3,
    text: "The color coordination is just perfect. I usually struggle to match accessories, but the Deep Rose set makes it so easy to look put together. It feels much more expensive than it is! And also it is useful to gift people!",
    name: "Siddhi Patel",
    role: "Business Owner",
    initials: "SP",
    color: "bg-rose",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-blush/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold mb-4">
            <span className="font-script text-coral text-3xl md:text-4xl lg:text-5xl">C</span>
            ustomer{" "}
            <span className="font-script text-peach text-3xl md:text-4xl lg:text-5xl">R</span>
            eviews
          </h2>
          <p className="text-sm md:text-base text-foreground/80">
            Some of our{" "}
            <span className="text-coral font-medium">Valuable Customers</span>{" "}
            have left some reviews for us!
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-sm border border-border/30"
            >
              {/* Review Text */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                {review.text}
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div
                  className={`${review.color} w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-foreground`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
