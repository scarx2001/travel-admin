import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhatCanWeDo from "../components/WhatCanWeDo";
import Footer from "../components/Footer";
import WhoAreWe from "../components/WhoAreWe";
import WhyChooseUs from "../components/WhycChooseUs";
import Reassurance from "../components/Reassurance";
export default function Index() {
  return (
    <>
      <NavBar />
      <Hero />
      <WhatCanWeDo />
      <Features />
      <WhyChooseUs />
      <Reassurance />
      <WhoAreWe />
      <Footer />
    </>
  );
}
