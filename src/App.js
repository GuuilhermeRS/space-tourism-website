import { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Header from './components/Header';
import Routes from './Routes';

const bg = {
  home: {
    desktop: './assets/background/home-desktop.jpg',
    tablet: './assets/background/home-tablet.jpg',
    mobile: './assets/background/home-mobile.jpg',
  },
  destination: {
    desktop: './assets/background/destination-desktop.jpg',
    tablet: './assets/background/destination-tablet.jpg',
    mobile: './assets/background/destination-mobile.jpg',
  },
  crew: {
    desktop: './assets/background/crew-desktop.jpg',
    tablet: './assets/background/crew-tablet.jpg',
    mobile: './assets/background/crew-mobile.jpg',
  },
  technology: {
    desktop: './assets/background/technology-desktop.jpg',
    tablet: './assets/background/technology-tablet.jpg',
    mobile: './assets/background/technology-mobile.jpg',
  },
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
