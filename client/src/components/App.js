import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

// Routes
import Home from './Home';
import Quiz from './Quiz';
import Results from './Results';

function App() {
  return (
    <Router history={history}>
      <Route path='/' exact component={Home}></Route>
      <Route path='/quiz' exact component={Quiz}></Route>
      <Route path='/results' exact component={Results}></Route>
    </Router>
  );
}

export default App;
