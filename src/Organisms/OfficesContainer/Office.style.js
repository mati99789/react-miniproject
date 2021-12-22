import styled from 'styled-components';

const OfficeStyle = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  box-shadow: 5px 5px 15px 5px #6e97c3;
  padding: 0.5rem;
  border-radius: 10px;
  margin-top: 2rem;

  & div {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    & h3 {
      font-size: 1.7rem;
      color: #264653;
    }
    & img {
      max-width: 50%;
    }
  }
`;

export default OfficeStyle;
