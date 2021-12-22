import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding: 3rem;
    margin-bottom: -3rem;
  }
`;

export default Wrapper;
