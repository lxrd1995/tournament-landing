/* eslint-disable jsx-a11y/anchor-has-content */
import { HandySvg } from "handy-svg";
import React from "react";
import "./NextMatch.scss";
import vsLogo from "../../static/img/vs.svg"

const NextMatch = (props) => {
  return (
    <div className="next-match__container">
      <h1 className="heading__title">СЛЕДУЮЩИЙ МАТЧ</h1>
      <div className="next-match__container__row">
        <img src={props.imgLeft} alt=""></img>
        <div className="next-match__container__row-date">
            <p>{props.data}</p>
            <HandySvg src={vsLogo} />
            <p>{props.mode}</p>
        </div>
        <img src={props.imgRight} alt=""></img>
      </div>
      <div className="button"><a href="/next-match" className="button_primary">Принять участие</a></div>
    </div>
  );
};

export default NextMatch;
