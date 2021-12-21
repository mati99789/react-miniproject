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
  background-color: #fff;
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
    margin: 1rem 0;
    background-color: red;
    text-align: center;
    transition: 2s;
    & a {
      color: #fff;
      text-decoration: none;

      display: inline-block;
    }
    }
  }
`;

export default Wrapper;
