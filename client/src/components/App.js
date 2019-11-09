import React from 'react';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
