import React from 'react'
import { BiEnvelope } from "react-icons/bi";

const CtaButton = () => {
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
    <button 
      className="btn-primary flex items-center ml-auto" 
      type="button"
      onClick={scrollToContactForm}
    >
      <BiEnvelope /> Contact
    </button>
  );
};

export default CtaButton