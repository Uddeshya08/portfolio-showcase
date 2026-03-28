import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageMarquee from "@/components/ImageMarquee";
import SkillsSection from "@/components/SkillsSection";
import AILogosMarquee from "@/components/AILogosMarquee";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ImageMarquee />
      <SkillsSection />
      <AILogosMarquee />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
