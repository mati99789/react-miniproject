import styled from 'styled-components';

const OfficeItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  a {
    display: block;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin: 0;
    & h3 {
      font-size: 1.7rem;
      color: #264653;
    }
    & img {
      max-width: 50%;
    }

    & button {
      width: 30%;
    }
  }
`;

export default OfficeItem;
