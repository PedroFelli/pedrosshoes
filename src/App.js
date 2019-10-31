import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';

import GlobalStyke from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyke />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
