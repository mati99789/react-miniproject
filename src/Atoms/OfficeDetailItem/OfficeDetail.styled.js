import styled from 'styled-components';

const OfficeStyle = styled.div`
  max-width: 50vh;
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px #6e97c3;
  margin: 0.5rem auto;
  padding: 1.5rem;
  color: #fff;
  background-color: #2a9d8f;
  
  & h3 {
    color: #264653;
  }
  

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 7rem auto;
    max-width: 90vh;

    & button {
      width: 30%;
      display: block;
    }

    & a {
      display: block;
    }
  }
`;

export default OfficeStyle;
