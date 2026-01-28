import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ReservationSection from "@/components/ReservationSection";
import ClinicSpaceSection from "@/components/ClinicSpaceSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import MembershipPopup from "@/components/MembershipPopup";

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short delay (like the original site)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
      
      <MembershipPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
};

export default Index;
