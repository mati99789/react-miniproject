import styled from 'styled-components';

const SubtStyle = styled.h2`
  letter-spacing: 3px;
  font-size: 1.3rem;
  color: #264653;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
    letter-spacing: 4px;

    & img {
      max-width: 100%;
    }
  }
`;

export default SubtStyle;
