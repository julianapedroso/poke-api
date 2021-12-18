import React from 'react';
import GlobalState from './global/GlobalState';
import Router from './routes/router';

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  )
}

export default App;
