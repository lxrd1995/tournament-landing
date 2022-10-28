/* eslint-disable jsx-a11y/alt-text */
import "./GameSchedule.scss";
import Logo from "../../static/logo.svg";
import Dots from "../../static/img/decoration-circles.svg";

const GameSchedule = ({logoRight, nameRight, date, game, logoLeft, nameLeft}) => {
    return (
        <div className="game-schedule__row">
            <div className="game-schedule__row__team">
                <img src={Logo}></img>
                <p></p>
            </div>
            <img src={Dots}></img>
        </div>
    );
};

export default GameSchedule