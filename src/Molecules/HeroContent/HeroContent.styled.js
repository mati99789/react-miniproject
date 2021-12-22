import styled from 'styled-components';

const HeroContentStyle = styled.div`
  width: 90vw;
  display: grid;
  align-items: center;

  .hero-info h1 {
    text-transform: none;
    max-width: 500px;
    margin-bottom: 2rem;
  }

  .hero-info p {
    max-width: 35em;
    font-size: 1.3rem;
    line-height: 1.8;
  }

  img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;

    & .hero-info {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .hero-info h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    & .hero-info p {
      font-size: 1.5rem;
      line-height: 1.8;
    }

    img {
      display: block;
      max-width: 30%;
      border-radius: 15px;
    }
  }
`;

export default HeroContentStyle;
