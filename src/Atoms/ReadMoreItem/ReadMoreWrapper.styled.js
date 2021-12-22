import styled from 'styled-components';

const ReadMoreWrapperStyled = styled.div`
  max-width: 50vh;
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px #6e97c3;
  margin: 0.5rem;
  padding: 0.5rem;

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
