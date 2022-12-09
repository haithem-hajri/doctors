import React from "react";
import Hero from "../../components/home-components/hero/Hero";
import Features from "../../components/home-components/features/Features";
import BestDoctors from "../../components/home-components/best-doctors/BestDoctors";
const Home = () => {
  return (
    <>
      <Hero />
      <Features/>
      <BestDoctors/>
    </>
  );
};

export default Home;
