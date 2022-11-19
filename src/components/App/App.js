import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import TournamentBracket from '../TournamentBracket/TournamentBracket';
import TournamentTable from '../TournamentTable/TournamentTable';
import Live from '../Live/Live';
import Teams from '../Teams/Teams';
// import Footer from '../Footer/Footer';
import FAQ from '../FAQ/FAQ';
import NextMatch from '../NextMatch/NextMatch';

import '../../static/scss/style.scss';
import Footer from '../Footer/Footer';

const App = () => {
	return (
		<div className="App">
			<Header />
			<div className="main">
				<Hero />
				<NextMatch />
				<Live />
				<Teams />
				<TournamentBracket />
				<TournamentTable />
				<FAQ />
			</div>
			<Footer/>
		</div>
	)
}

export default App