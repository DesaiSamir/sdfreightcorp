// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { HeaderProvider } from './contexts/HeaderContext';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import './styles/fonts.css'; // Import the custom fonts CSS file

const theme = createTheme(); // Create your custom theme here

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}> {/* Provide the theme object to ThemeProvider */}
            <Router>
                <HeaderProvider>
                    <div>
                        <Header />
                        <Routes>
                            <Route path="/sdfreightcorp/about" element={<About />} />
                            <Route path="/sdfreightcorp/" element={<Home />} />
                        </Routes>
                    </div>
                </HeaderProvider>
            </Router>
        </ThemeProvider>
    );
};

export default App;