import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  background-color: #e9c46a;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  border-radius: 15px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .icon {
    width: 20px;
    height: 20px;
  }
  
  & a {
    font-size: 1.2rem;
    color: #fff;
    margin-left: 0.3rem;
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    justify-content: center;

    & div {
      margin: 0 4rem;
    }

    & a {
      font-size: 1.6rem;
    }
    & .icon {
      width: 30px;
      height: 30px;
    }
  }
`;

export default FooterStyled;
