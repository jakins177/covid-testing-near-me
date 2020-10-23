import React from 'react';
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
              

            </nav>
       
 
          <Switch>  
          <Route exact path="/">
             <Home />
            </Route>
            <Route path="/about">
              <About />
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
  
   
    <h3>Do you believe that you or someone you know might have Covid-19. This site is all about finding 
      your nearest testing facilty! Covid-19 testing is completely free in the United States.
    </h3>
    
     </div>);
}