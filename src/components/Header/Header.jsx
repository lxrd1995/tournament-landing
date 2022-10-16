import React, { useState } from 'react';
import Nav from '../Nav/Nav'

import logo from '../../static/logo.svg';
import './Header.scss'


const Header = () => {
	const [menuActive, setMenuActive] = useState(false)
	return (
		<header className="header outer">
			<div className="container">
				<a href='#' className="header__logo">
					<img src={logo} alt="logo burning cup" />
					<h2>Burning cup</h2>
				</a>
				<div className="header__menu menu">
					<button className={menuActive ? "menu__icon  active" : "menu__icon"} onClick={() => { setMenuActive(!menuActive); document.body.classList.toggle('_lock'); }}>
						<span></span>
					</button>
					<Nav active={menuActive} setActive={setMenuActive} />
				</div>
			</div>
		</header >
	)
}


export default Header;
