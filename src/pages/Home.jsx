import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import HiddenLuxury from "../components/home/HiddenLuxury";
import VayuneMoment from "../components/home/VayuneMoment";
import Reality from "../components/home/Reality";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HiddenLuxury />
      <VayuneMoment />
      <Reality />
    </>
  );
}