import React from 'react';
import HeroSection from './Hero.styled';

const Hero = function ({ children }) {
  return <HeroSection className="hero">{children}</HeroSection>;
};

export default Hero;
