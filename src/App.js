import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './pages/Navigation'
import Home from './pages/home'

function App() {
  return (
    <div>
      TEsing different stuff
        <Router>
          <div>

          {/* <Navigation/> */}

          {/* <Switch> */}
            <Route exact path="/" component={Home}/>

          {/* </Switch> */}
          
        </div>
      </Router>
    </div>
  );
}

export default App;
