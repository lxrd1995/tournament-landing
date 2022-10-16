import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from '../Footer/Footer';
import MainScreen from '../MainScreen/MainScreen';
import Teams from '../Teams/Teams';
import Sidebar from '../Sidebar/Sidebar';

import '../../static/scss/style.scss';


const App = () => {

	return (
		<div className="App">
			<BrowserRouter>
				<Sidebar />
				<main className='main'>
					<Routes>
						<Route path='/' element={<MainScreen />} />
						<Route path='/teams' element={<Teams />} />
						<Route path='/sheduler' element={<Teams />} />
					</Routes>
				</main>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
