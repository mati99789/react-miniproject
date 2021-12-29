import styled from 'styled-components';

const ContactForm = styled.form`
  background-color: #e9c46a;
  box-shadow: 5px 5px 15px 5px #6e97c3;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  color: #fff;
  
  
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2a9d8f;
    border-radius: 15px;
    padding: 1rem;
  }
  
  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60vw;
    margin: 0.5rem auto;
  }
  
  & button {
    margin-top: 1rem;
    color: #fff;
  }

  @media screen and (min-width: 768px){
    & div {
      width: 30vw;
      margin: 0 auto;
    }
    
    label {
      margin: 0;
    }
    
    input, textarea {
      display: block;
      margin: 0.5rem auto;
    }
  }
`

export default ContactForm;