import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Project from '../Project/index';
import About from '../About';
import Header from './header';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Project key={Math.random()} />} />
      <Route path="/about" component={About} />
      <Route exact path="/reviews" component={Project} />
    </Switch>
  </Router>
);

export default Routes;
