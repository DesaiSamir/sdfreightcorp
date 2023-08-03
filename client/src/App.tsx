// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

const App: React.FC = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes >
					<Route path="/about-us" element={<About />} />
					<Route path="/" element={<Home />} />
				</Routes >
			</div>
		</Router>
	);
};

export default App;