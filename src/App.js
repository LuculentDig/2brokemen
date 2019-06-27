import React from 'react';
import logo from './logo.svg';
import './App.css';
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
