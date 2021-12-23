import styled from 'styled-components';

const OfficeStyle = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 15px 5px #6e97c3;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: #e9c46a;

  & div {
    display: flex;
    flex-direction: column;
  }
  
  & img {
    border-radius: 15px;
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
