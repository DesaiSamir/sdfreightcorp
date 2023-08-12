// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/AboutUs';
import { HeaderProvider } from './contexts/HeaderContext';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import './styles/fonts.css'; // Import the custom fonts CSS file
import Careers from './pages/Careers';
import { links } from './helpers/constants'; // Import the links object from constants
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';

const theme = createTheme(); // Create your custom theme here

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}> {/* Provide the theme object to ThemeProvider */}
            <Router>
                <HeaderProvider>
                    <div>
                        <Header />
                        <Routes>
                            <Route path={links.about} element={<About />} />
                            <Route path={links.careers} element={<Careers />} />
                            <Route path={links.home} element={<Home />} />
                            <Route path={links.privacy} element={<PrivacyPolicy />} />
                        </Routes>
                        <Footer />
                    </div>
                </HeaderProvider>
            </Router>
        </ThemeProvider>
    );
};

export default App;
