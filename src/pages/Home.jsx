import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import HiddenLuxury from "../components/home/HiddenLuxury";
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
      <HiddenLuxury />
      <VayuneMoment />
      <Reality />
      <Evidence />
      <ExceptionalHomes />
      <ConsultationCTA />
      <Footer />

    </>
  );
}