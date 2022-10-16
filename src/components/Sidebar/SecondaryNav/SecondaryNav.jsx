import { Link } from 'react-router-dom';

import './SecondaryNav.scss';


const SecondaryNav = () => {
	return (
		<div className="secondary-nav hidden">
			<li>О нас</li>
			<li>Новости</li>
			<li>Регламент</li>
		</div>
	)
}

export default SecondaryNav;