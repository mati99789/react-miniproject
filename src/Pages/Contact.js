import React from 'react';
import GeneralInformations from '../Organisms/GeneralInformations/GeneralInformations';
import Footer from '../Organisms/Footer/Footer';
import ContactFormContainer from "../Organisms/ContactFormContainer/ContactFormContainer";

const Contact = function () {
  return (
    <div>
      <GeneralInformations />
      <ContactFormContainer />
      <Footer />
    </div>
  );
};

export default Contact;
