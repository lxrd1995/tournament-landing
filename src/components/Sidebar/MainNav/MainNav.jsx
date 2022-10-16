import { HandySvg } from 'handy-svg';
import { Link } from 'react-router-dom';

import './MainNav.scss';


const MainNav = (props) => {
	console.log(props.setState);
	let links = props.els.map(l =>
		<li onClick={() => props.setState(!props.state)}>
			<Link className={l.class} to={l.to}>
				<HandySvg src={l.icon__path} className='main-nav__icon' />
				<span className='hidden'>{l.text}</span>
			</Link>
		</li>
	);

	return (
		<div className="main-nav">
			{links}
			<div className="main-nav__seasons">
				<div className="main-nav__seasons-season">C</div>
				<Link className='sidebar__link hidden' to='/seasonI'>СЕЗОН I</Link>
				<Link className='sidebar__link hidden' to='/seasonII'>СЕЗОН II</Link>
			</div>
		</div>
	)
}

export default MainNav;