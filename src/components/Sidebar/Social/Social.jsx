import { HandySvg } from 'handy-svg';
import { Link } from 'react-router-dom';

import './Social.scss';


const Social = () => {
	return (
		<div className="social hidden">
			<ul className="social__list">
				<li><Link to='#' className="social__link">Телеграм</Link></li>
				<li><Link to='#' className="social__link">Ютуб</Link></li>
				<li><Link to='#' className="social__link">Дискорд</Link></li>
				<li><Link to='#' className="social__link">ВК</Link></li>
			</ul>
		</div>
	)
}

export default Social;