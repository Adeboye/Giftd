import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Project from '../Project/index';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Project} />
    </Switch>
  </Router>
);

export default Routes;
