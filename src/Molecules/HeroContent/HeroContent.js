import React from 'react';
import Hero from '../../Atoms/Hero/Hero';
import HeroContentStyle from './HeroContent.styled';
import weImage from '../../assets/images/we.jpg';

const HeroContent = function () {
  return (
    <Hero>
      <HeroContentStyle>
        <article className="hero-info">
          <p>
            QWERTY AB is an international company that delivers turnkey systems
            to industry based in Halmstad and sales offices in Denmark, Norway,
            India, Thailand and the USA.{' '}
          </p>
          <img src={weImage} alt="" />
        </article>
      </HeroContentStyle>
    </Hero>
  );
};

export default HeroContent;
