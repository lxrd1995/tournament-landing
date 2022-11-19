import './Footer.scss';
import logo from '../../static/icon/logo.svg';

const Footer = () => {
	return (
		<footer className="footer outer">
			<div className="container">
				<img src={logo} alt=""></img>
				<div>
					<h1>Burning cup</h1>
					<p>Гори, сгорай до тла</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;