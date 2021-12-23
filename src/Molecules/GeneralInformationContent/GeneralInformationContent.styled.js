import styled from 'styled-components';

const GeneralInformationContent = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 1.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1rem;

    & img {
      max-width: 50%;
    }

    & p {
      margin-left: 2rem;
    }
  }
`;

export default GeneralInformationContent;
