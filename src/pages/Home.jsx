import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import AtmosphereSection from "../components/home/AtmosphereSection";
import DetailSection from "../components/home/DetailSection";
import VayuneMoment from "../components/home/VayuneMoment";
import Reality from "../components/home/Reality";
import Evidence from "../components/home/Evidence";
import ExceptionalHomes from "../components/home/ExceptionalHomes";
import ConsultationCTA from "../components/home/ConsultationCTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AtmosphereSection />
      <Reality />
      <Evidence />
      <ExceptionalHomes />
      <ConsultationCTA />
      <Footer />

    </>
  );
}