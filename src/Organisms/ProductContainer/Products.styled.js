import styled from 'styled-components';

const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 15px 5px #6e97c3;
  margin: 2rem 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #e9c46a;
  
  & div {
    background-color: #2a9d8f;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 15px;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    & h3 {
      font-size: 1.7rem;
      color: #264653;
    }
  }
`;

export default ProductWrapper;
