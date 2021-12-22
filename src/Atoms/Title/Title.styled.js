import styled from 'styled-components';

const TitleStyle = styled.h1`
  letter-spacing: 3px;
  font-size: 2.5rem;

  @media screen and (min-width: 768px) {
    & h1 {
      font-size: 3rem;
    }
  }
`;

export default TitleStyle;
