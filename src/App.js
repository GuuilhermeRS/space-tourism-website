import { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Header from './components/Header';
import Routes from './Routes';

const bg = {
  home: './assets/background/home.jpg',
  destination: './assets/background/destination.jpg',
  crew: './assets/background/crew.jpg',
  technology: './assets/background/technology.jpg',
};

export const BackgroundContext = createContext(bg.home);

function App() {
  const [background, setBackground] = useState(bg.home);

  function handleBackground(name) {
    Object.keys(bg).forEach((key) => (key === name ? setBackground(bg[key]) : null));
  }

  return (
    <BrowserRouter>
      <BackgroundContext.Provider value={{ handleBackground }}>
        <GlobalStyles background={background} />
        <Header />
        <Routes />

      </BackgroundContext.Provider>
    </BrowserRouter>
  );
}

export default App;
