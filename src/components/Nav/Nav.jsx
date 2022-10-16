import React from 'react';
import './Nav.scss'


const Nav = (props) => {
	return (
		<nav className={props.active ? 'nav active' : 'nav'}>
			<ul className='nav__list'>
				<li><a href="#" className="nav__link">Главная</a></li>
				<li><a href="#" className="nav__link">О Нас</a></li>
				<li><a href="#" className="nav__link">Прямая трансляция</a></li>
				<li><a href="#" className="nav__link">Расписание</a></li>
			</ul>
		</nav>
	)
}


export default Nav;
