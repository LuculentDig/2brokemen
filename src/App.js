import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navigation from './pages/Navigation'
import Home from './pages/home'


function App() {
  return (
      <Router>
      <div>

      <Navigation/>

      {/* <Switch> */}
        <Route exact path="/" component={Home}/>

      {/* </Switch> */}
      
    </div>
  </Router>
  );
}

export default App;
