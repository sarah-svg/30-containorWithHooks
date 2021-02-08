import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterList from '../../containors/CharacterList';
import Characters from '../../containors/Characters';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path= "/:character" component={Characters}/>
      </Switch>
    </Router>

  );
}
