import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Routes
import Home from './Home';
import Quiz from './Quiz';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}></Route>
      <Route path='/quiz' exact component={Quiz}></Route>
    </BrowserRouter>
  );
}

export default App;
