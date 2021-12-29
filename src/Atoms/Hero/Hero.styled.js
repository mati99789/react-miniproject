import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  min-height: 75vh;
  margin-top: 8rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
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
    background: linear-gradient(45deg, rgba(255, 175, 189, .7), rgba(100, 216, 243, .7), rgba(234, 236, 198, .7), rgba(245, 146, 176, .7), rgba(52, 219, 216, .7)) 0 0 / 1000% no-repeat, url(https://picsum.photos/g/2000/1200?image=443) 0 0 / cover no-repeat;
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
