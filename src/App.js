import React from 'react';
import { BrowserRouter as Router, Route } from 'react-Router-dom';
import './App.css';
import Home from './components/Home/Home.js';
function App() {
  return (
      <Router>
        <Route path='/' component={Home} />
        {/* <Route path='/about' component={About} />
        <Route path='/shop' component={Shop} /> */}
      </Router>
    
  )
}

export default App;
