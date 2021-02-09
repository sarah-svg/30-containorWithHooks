import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ACharacter from '../../containors/ACharacter';
import AllCharacters from '../../containors/AllCharacters';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route exact path= "/detail/:id" component={ACharacter}/>
      </Switch>
    </Router>

  );
}
