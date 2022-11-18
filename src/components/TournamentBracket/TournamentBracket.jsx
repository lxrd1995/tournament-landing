import TeamRow from "./TeamRow/TeamRow";
import { HandySvg } from "handy-svg";

import "./TournamentBracket.scss";

import team1 from "../../static/img/team1.jpeg";
import team2 from "../../static/img/team2.jpg";
import Champions from "../../static/icon/Champions-sheet.svg";

const TournamentBracket = () => {
  return (
    <section className="tournament-bracket outer">
      <div className="section-title">Турнирная сетка</div>
      <div className="container">
        <div className="container__first-round">
          <div className="battle-container">
            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>

            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>
          </div>
          <div className="battle-container">
            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>
            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>
          </div>
        </div>
        <div className="container__second-round">
          <div className="duo-battle-container">
            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>
            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>
          </div>
        </div>
        <div className="container__center-round">
          <HandySvg src={Champions} width="150px" />
          <div className="battleGroup">
            <TeamRow img={team1} name="Команда 1" score="0" />
            <TeamRow img={team2} name="Команда 2" score="0" />
          </div>
        </div>
        <div className="container__first-oposite-round">
          <div className="oposite-duo-battle-container">
            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>
            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>
          </div>
        </div>
        <div className="container__second-oposite-round">
          <div className="oposite-battle-container">
            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>

            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>
          </div>
          <div className="oposite-battle-container">
            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>
            <div className="battleGroup">
              <TeamRow img={team1} name="Команда 1" score="0" />
              <TeamRow img={team2} name="Команда 2" score="0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentBracket;
