import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import WhyUs from "../components/WhyUs/WhyUs";
import HowItWorksComponent from "../components/WhyUs/HowItWorksComponent";

function Features() {
  return (
    <div>
      <Navbar />

      <div class="pt-[120px] bg-greend  bg-cover bg-no-repeat ">
        <div class=" text-center mx-auto py-10   ">
          <div>
            <h1
              data-aos="fade-down"
              class="text-light text-3xl font-bold leading-tight mb-5"
            >
              Isosales POS Unique features
            </h1>
          </div>
        </div>
      </div>
      <WhyUs />

      <HowItWorksComponent />

      <Footer/>
    </div>
  );
}

export default Features;
