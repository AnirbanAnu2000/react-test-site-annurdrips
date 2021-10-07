import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/inc/Footer';

function App() {
  return (

    <Router>
      <div>

        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
      {/* footer part */}
      <Footer/>
      </div>
    </Router>

  );
}

export default App;
