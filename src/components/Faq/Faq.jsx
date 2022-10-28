/* eslint-disable jsx-a11y/anchor-is-valid */
const Faq = ({ faq_a, faq_p }) => {
  // const stateA = document.querySelector('.faq__a__div__a');

  return (
    <div className="faq faq__open">
      <a className="faq__a">
        <div className="faq__a__div">
          <p>{faq_a}</p>
          <a className="faq__a__div__a">-</a>
        </div>
      </a>
      <p className="faq__p">{faq_p}</p>
    </div>
  );
};

export default Faq;
