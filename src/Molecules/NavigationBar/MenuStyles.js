import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.nav)`
  position: relative;
  width: 100vw;
  background-color: #fff;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: 2s;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }
  & li {
    list-style: none;
    padding: 1rem;
    margin: 0.5rem;
    background-color: red;
    text-align: center;
    transition: 2s;
    & a {
      color: #fff;
      text-decoration: none;

      display: inline-block;
    }

    &:hover {
      background-color: yellow;

      & a {
        color: black;
      }
    }
  }
`;

export default Wrapper;
