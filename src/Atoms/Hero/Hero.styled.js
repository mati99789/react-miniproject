import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  min-height: 75vh;
  margin-top: -5rem;
  z-index: -1;
  display: flex;
  padding: 0.5rem;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -100px;
    left: 0;
    background: rgb(231, 111, 81);
    background: linear-gradient(
      180deg,
      rgba(231, 111, 81, 1) 0%,
      rgba(233, 196, 106, 1) 42%,
      rgba(38, 70, 83, 1) 100%
    );
    background-repeat: no-repeat;
    z-index: -1;
    box-shadow: 0px 5px 15px -1px #264653;
    border-radius: 15px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: -9rem;
    &::before {
      top: 0;
    }
  }
`;
export default HeroSection;
