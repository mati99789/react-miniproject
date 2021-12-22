import styled from 'styled-components';

const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 15px 5px #6e97c3;
  margin: 2rem 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    & h3 {
      font-size: 1.7rem;
      color: #264653;
    }
  }
`;

export default ProductWrapper;
