import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TestsMap'
import TestsMap from './components/TestsMap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
       
            <nav>
            
              <Link to="/">Home</Link> | 
              <Link to="/about">About</Link> |
              <Link to="/contact">Contact</Link> |
              <Link to="/faq">FAQ</Link> |
              <Link to="/support">Support</Link> |
              <Link to="/share">Share</Link> |
              

              

            </nav>
       
 
          <Switch>  
          <Route exact path="/">
             <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
            <Route path="/share">
              <Share />
            </Route>
          
            
          </Switch>

        </Router>

    </div>
   
  );
}

export default App;


function Home() {
  return ( 
    <div>
  <h1> Covid Testing Near Me</h1>
  <TestsMap/>
  </div> 
);
}


function About() {
  return (<div>
  
    <h2>About</h2>
  
   
    <h3>Do you believe that you or someone you know might have Covid-19? This site is all about finding 
      your nearest testing facilty. Covid-19 testing is completely free in the United States.
    </h3>
    
     </div>);
}

function Contact() {
  return (<div>
  
    <h2>Contact</h2>
  
   
    <h3>Questions? Comments? Concerns?
    </h3>

    <h3>Email: contact@coivdtestingnearme.com</h3>
    
     </div>);
}

function FAQ() {
  return (<div>
  
    <h2>FAQ</h2>
  
   
    <h3>How can I find a place near me to be tested for Covid-19? <br/>
      <i>Navigate to home and simply type in your city or zipcode and location markers for the facilities you can visit will appear.</i>
    </h3>

    <h3>How can I find free testing?<br/>
      <i>By law Covid-19 testing is free in the United States. Check the laws for your country</i>
    </h3>
    
     </div>);
}

function Support() {
  return (<div>
  
    <h2>Support</h2>
  
   
    <h3>See a bug or technical issue?</h3>
     

    <h3>Email: support@coivdtestingnearme.com</h3>
    
     </div>);
}


 class Share extends Component {
  render() {
    return (
      <div>
        <h3>Share this site on social media. Facebook, Instagram, Twitter</h3>
      </div>
    )
  }
}
