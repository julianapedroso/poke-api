import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Pokedex from '../pages/Pokedex';
import Details from '../pages/Details';
import Error from '../pages/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>

        <Route exact path={'/pokedex'}>
          <Pokedex />
        </Route>

        <Route exact path={'/details'}>
          <Details />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
