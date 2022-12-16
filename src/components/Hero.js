import React from "react";
import { HeroSection } from "./styles/heroSectionStyled";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <HeroSection>
      <button>
        <FaRegArrowAltCircleDown />
      </button>
    </HeroSection>
  );
};

export default Hero;
