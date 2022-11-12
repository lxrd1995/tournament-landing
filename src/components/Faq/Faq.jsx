import React, { useState } from "react";
import "./Faq.scss";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Faq = (props) => {
  const [faqState, setFaqState] = useState(false);

  return (
    <div className="faq">
      <a
        className="faq__a"
        onClick={() => setFaqState(!faqState)}
      >
        <div className="faq__a__div">
          <p>{props.faq_a}</p>
          <a className="faq__a__div__a">
            +
          </a>
        </div>
      </a>
      <p className={faqState ? 'faq__p' : "faq__p none"}>
        {props.faq_p}
      </p>
    </div>
  );
};

export default Faq;