import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

// Routes
import Home from './Home';
import Quiz from './Quiz';

function App() {
  return (
    <Router history={history}>
      <Route path='/' exact component={Home}></Route>
      <Route path='/quiz' exact component={Quiz}></Route>
    </Router>
  );
}

export default App;
