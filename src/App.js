import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';
import GlobalStyles from './styles/global';

import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}

export default App;
