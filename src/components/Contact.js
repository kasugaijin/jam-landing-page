import React from 'react'
import { BiEnvelope } from "react-icons/bi";

const Contact = ({className, showEnvelope}) => {

  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById('contact-form');
    if (contactFormElement) {
      const { top } = contactFormElement.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      onClick={scrollToContactForm}
      className={className}
    >
      {showEnvelope && <BiEnvelope/>} Contact
    </div>
  );
};

export default Contact