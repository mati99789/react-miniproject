import styled from 'styled-components';

const ReadMoreWrapperStyled = styled.div`
  max-width: 50vh;
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px #6e97c3;
  padding: 1.5rem;
  background-color: #2a9d8f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 0 auto;

  & h3 {
    color: #264653;
  }
  
  & a {
    display: block;
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

export default ReadMoreWrapperStyled;
