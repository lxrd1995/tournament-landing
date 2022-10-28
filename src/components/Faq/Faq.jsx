import React from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Faq = ({ faq_a, faq_p }) => {

  function openTab() {
    const faqP = document.querySelector('.faq__p'),
          symbolState = document.querySelector('.faq__a__div__a');
    faqP.classList.toggle('none')

    if (symbolState.innerHTML === '+') {
      symbolState.innerHTML = '-';
    } else {
      symbolState.innerHTML = '+';
    }
  }

  return (
    <div className="faq">
      <a className="faq__a" onClick={openTab}>
        <div className="faq__a__div">
          <p>{faq_a}</p>
          <a className="faq__a__div__a">+</a>
        </div>
      </a>
      <p className="faq__p none">{faq_p}</p>
    </div>
  );
};

export default Faq;
