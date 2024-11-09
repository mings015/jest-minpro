import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSectiom from "@/pages/HomePage/components/HeroSection";
import QuestionSection from "@/pages/HomePage/components/QuestionSection";
import TestimoniSection from "@/pages/HomePage/components/TestimoniSection";
import AboutSection from "@/pages/HomePage/components/AboutSection";
import ContactSection from "./components/ContactSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSectiom/>
      <AboutSection/>
      <TestimoniSection />
      <QuestionSection/>
      <ContactSection/>
      <Footer />
    </>
  );
};

export default HomePage;
