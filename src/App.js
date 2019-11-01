import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './router';
import GlobalStyke from './styles/global';
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyke />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
