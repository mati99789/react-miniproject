import styled from 'styled-components';

const SubtStyle = styled.h2`
  letterspacing: '3px';
  fontsize: '1.3rem';

  @media screen and (min-width: 768px) {
    font-size: 3rem;
    letter-spacing: 4px;

    & img {
      max-width: 100%;
    }
  }
`;

export default SubtStyle;
