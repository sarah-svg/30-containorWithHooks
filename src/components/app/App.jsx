import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCharacters from '../../containors/AllCharacters';

import Characters from '../../containors/OneCharacter';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route exact path= "/detail/:character" component={Characters}/>
      </Switch>
    </Router>

  );
}
