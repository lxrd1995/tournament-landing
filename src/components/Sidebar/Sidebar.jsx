import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Sidebar.scss';

import MainNav from './MainNav/MainNav';
import SecondaryNav from './SecondaryNav/SecondaryNav';
import Social from './Social/Social';

import sheduler from '../../static/sheduler.svg';
import teams from '../../static/teams.svg';
import live_stream from '../../static/live_stream.svg';
import seasons from '../../static/seasons.svg';
import logo from '../../static/logo.svg';


const Sidebar = () => {
	const [sideBarActive, setSideBarActive] = useState(false);

	const updateBodyStyle = () => {
		document.body.classList.toggle('_lock');
	}

	const setSideBarState = (state) => {
		updateBodyStyle();
		setSideBarActive(!state)
	}

	let links = [
		{ className: 'sidebar__link', icon__path: logo, to: '/', text: 'Burning League' }, ,
	];

	let mainNavEls = [
		{ id: 1, class: 'sidebar__link', icon__path: sheduler, to: '/sheduler', text: 'РАСПИСАНИЕ' },
		{ id: 2, class: 'sidebar__link', icon__path: teams, to: '/teams', text: 'КОМАНДЫ' },
		{ id: 3, class: 'sidebar__link', icon__path: live_stream, to: '/live_stream', text: 'ПРЯМАЯ ТРАНСЛЯЦИЯ' },
		{ id: 4, class: 'sidebar__link', icon__path: seasons, to: '/sessons', text: 'СЕЗОНЫ' }
	];

	return (
		<div className={sideBarActive ? 'sidebar _active' : 'sidebar'} onClick={() => setSideBarState(sideBarActive)}>
			<div className="sidebar__body" onClick={e => e.stopPropagation()}>
				<div className={sideBarActive ? 'sidebar__button _active' : 'sidebar__button'} onClick={() => setSideBarState(sideBarActive)} >
					<span></span>
				</div>
				<nav className='menu'>
					<MainNav els={mainNavEls} state={sideBarActive} setState={setSideBarState} />
					<SecondaryNav />
					<Social />
				</nav>
				<Link className='logo sidebar__link' to='/'><img src={logo} alt="burn" /><span className='hidden'>Burning League</span></Link>
			</div>
		</div >
	)
}


export default Sidebar;
