import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import HomeGrid from "../../components/HomeGrid/Homegrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Navbar /> */}
      <Carousel />
      <HomeGrid />
    </>
  );
}
