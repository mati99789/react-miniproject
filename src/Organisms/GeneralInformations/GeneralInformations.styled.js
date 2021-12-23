import styled from 'styled-components';

const GeneralInformationStyles = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #e9c46a;
  box-shadow: 5px 5px 15px 5px #6e97c3;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  color: #fff;
  

  @media screen and (min-width: 768px) {
    margin-top: 12rem;
  }
`;

export default GeneralInformationStyles;
