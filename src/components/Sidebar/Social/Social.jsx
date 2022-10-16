import { HandySvg } from 'handy-svg';
import { NavLink } from 'react-router-dom';

import './Social.scss';


const Social = () => {
	return (
		<div className="social hidden">
			<ul className="social__list">
				<li><NavLink to='#' className="social__link">Телеграм</NavLink></li>
				<li><NavLink to='#' className="social__link">Ютуб</NavLink></li>
				<li><NavLink to='#' className="social__link">Дискорд</NavLink></li>
				<li><NavLink to='#' className="social__link">ВК</NavLink></li>
			</ul>
		</div>
	)
}

export default Social;