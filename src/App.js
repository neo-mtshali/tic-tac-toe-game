import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { GameProvider } from './contexts/GameContext';
import GlobalStyle from './styles/globalStyles';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import { AppContainer } from './App.styles';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GameProvider>
          <GlobalStyle />
          <AppContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </AppContainer>
        </GameProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
