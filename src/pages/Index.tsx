import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PaperFellows - Curated Gift Hampers for Every Occasion</title>
        <meta
          name="description"
          content="We craft unique paper bouquets, aesthetic gift hampers, and custom gifts. #1 in Gujarat for premium color-coordinated accessories and gift sets."
        />
        <meta
          name="keywords"
          content="gift hampers, paper bouquets, aesthetic gifts, custom gifts, Gujarat gifts, PaperFellows"
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <CollectionsSection />
          <AboutSection />
          <ReviewsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
