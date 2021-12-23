import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e9c46a;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  

  ul {
    padding: 0.5rem;
    width: 100%;
  }

  & li {
    list-style: none;
    padding: 1rem;
    margin: 1.5rem 0;

    font-size: 1.4rem;
    letter-spacing: 4px;
    text-align: center;

    & a {
      color: #000;
      text-decoration: none;
      display: block;
    }
  }

  .selected {
    color: #e76f51;
  }

  @media screen and (min-width: 768px) {
    transform: translateX(0);
    background-color: #e9c46a;
    width: 100vw;
    height: 14vh;


    ul {
      display: flex;
      justify-content: center;
    }

  }
}
`;

export default Wrapper;
