import React from 'react';
import './MainScreen.scss'
import hero_text from '../../static/hero_text.svg';
import { HandySvg } from 'handy-svg';

const MainScreen = () => {
	return (
		<section className="main-screen outer">
			<div className="container">
				<div className="main-screen__offer offer">
					<h1>
						Добро пожаловать на
						<HandySvg src={hero_text} className='main-nav__icon' />
					</h1>
					<h2>Платформа для проведения киберспортивных сезонных онлайн турниров. Среди учащихся колледжей и школ.</h2>
					<div className="offer__actions">
						<button className="button button_primary">Принять участие</button>
						<button className="button button_border">Сезоны</button>
					</div>
				</div>
			</div>
		</section>
	)
}


export default MainScreen;
