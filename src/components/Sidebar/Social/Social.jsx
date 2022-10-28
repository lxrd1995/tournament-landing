import { HandySvg } from 'handy-svg';
import { NavLink } from 'react-router-dom';

import './Social.scss';

import telega from '../../../static/img/telega.svg';
import YouTube from '../../../static/img/youtube.svg';
import Discord from '../../../static/img/discord.svg';
import Vk from '../../../static/img/vk.svg';

const Social = () => {
	return (
		<div className="social hidden">
			<ul className="social__list">
				<li><NavLink to='#'><HandySvg className="social__link" src={telega}/></NavLink></li>
				<li><NavLink to='#'><HandySvg className="social__link" src={YouTube}/></NavLink></li>
				<li><NavLink to='#'><HandySvg className="social__link" src={Discord}/></NavLink></li>
				<li><NavLink to='#'><HandySvg className="social__link" src={Vk}/></NavLink></li>
			</ul>
		</div>
	)
}

export default Social;