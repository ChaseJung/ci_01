import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ReservationSection from "@/components/ReservationSection";
import ClinicSpaceSection from "@/components/ClinicSpaceSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ProgramsSection />
        <TestimonialsSection />
        <BeforeAfterSection />
        <ReservationSection />
        <ClinicSpaceSection />
      </main>

      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
