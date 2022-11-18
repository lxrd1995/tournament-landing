import { useState } from 'react';
import TabsRow from './TabsRow/TabsRow';
import './TournamentTable.scss';


const TournamentTable = () => {
	const [TabState, SetTabState] = useState(true);

	return (
		<section className="tournament-table outer">
			<div className="section-title">Турнирная таблица</div>
			<div className="container">
				<div className='tabs'>
					<p className={TabState ? "tab-btn active" : "tab-btn"} onClick={() => SetTabState(!TabState)}>Группа А</p>
					<p className={TabState ? "tab-btn" : "tab-btn active"} onClick={() => SetTabState(!TabState)}>Группа Б</p>
				</div>
				<div className="string-item first">
					<div>
						<p>#</p>
						<p>Команда</p>
					</div>
					<div>
						<p>Очки</p>
						<p>Матчи</p>
					</div>
				</div>
				<div className={TabState ? "" : "none"}>
					<TabsRow num="1" name="Team 1" score="10" match="10"/>
				</div>
				<div className={TabState ? "none" : ""}>
					<TabsRow num="2" name="Team 2" score="9" match="9"/>
				</div>				
				
			</div>
		</section>
	)
}

export default TournamentTable;
