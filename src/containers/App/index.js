import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutPage from '../../containers/LayoutPage';
import ResultsPage from '../../containers/ResultsPage';
import ProfilePage from '../../containers/ProfilePage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LayoutPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
