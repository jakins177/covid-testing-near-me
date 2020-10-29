import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/TestsMap'
import TestsMap from './components/TestsMap';
import ReactGA from 'react-ga';

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

ReactGA.initialize('G-SP555BH9ES');
ReactGA.pageview('/');

function App() {
  return (
    <div className="App">
      <Router>
       
            <nav>
            
              <Link to="/">Home</Link> | 
              <Link to="/about">About</Link> |
              <Link to="/faq">FAQ</Link> |
              <Link to="/contact">Contact</Link> |
              <Link to="/support">Support</Link> |
              {/* <Link to="/share">Share</Link> | */}
              

              

            </nav>
       
 
          <Switch>  
          <Route exact path="/">
             <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
            {/* <Route path="/share">
              <Share />
            </Route> */}
          
            
          </Switch>

        </Router>

    </div>
   
  );
}

export default App;


function Home() {
  return ( 
    <div>
  <h1>Free Covid Testing Near Me</h1>

  <FacebookShareButton url="https://freecovidtestingnearme.com/">
            <FacebookIcon round size={32} />
          </FacebookShareButton>
       
          <TwitterShareButton url="https://freecovidtestingnearme.com/">
            <TwitterIcon round size={32} />
          </TwitterShareButton>
          
          <LinkedinShareButton url="https://freecovidtestingnearme.com/">
            <LinkedinIcon round size={32} />
          </LinkedinShareButton>
  
  <br/>
<img src={ require('./images/covidtesting.jpg') } alt="Free Covid Testing Near You" width="40%"  />
  <br/>
  <TestsMap/>
<div>

</div>
  </div> 
);
}


function About() {
  return (<div >
  
    <h2>About</h2>
  
    <img src={ require('./images/covidworld.png') } alt="Covid-19" width="40%"  />
   
    <h3>Do you believe that you or someone you know might have Covid-19? This site, <b>Free Covid Testing Near Me,</b> is all about finding 
      your nearest testing facility. Covid-19 testing is completely free in the United States.  <a href= "/">CLICK HERE </a> to use our Covid-19 test facility finder tool.
    </h3>

   <p> Coronavirus testing standards and conditions change often. 
    Look at your local government guidelines and contact a covid testing facility near you
    before arriving, to know more about what that facility has to offer 
    and regarding times you can come to get tested.</p>

    <p>If you test postive for Covid-19 you may go through a contact tracing process. Contact Tracers are staff hired and organized to contact all people who have had interaction with others 
      who tested positive for Corona Virus. 
      Contact Tracers work with high-tech software and databases to collect information about the spread of Covid. 
      All contacts participation is kept private.</p>

    <p>
    You can use our free Covid-19 test facility finder tool <a href= "/">HERE </a> to quickly find covid testing near you.
    </p>
     
     </div>);
}

function Contact() {
  return (<div>
  
    <h2>Contact</h2>
  
   
    <h3>Questions? Comments? Concerns?
    </h3>

    <h3>Email: FreeCovidTestingNearMe@mail.com .com</h3>
    
     </div>);
}

function FAQ() {
  return (<div>
  
    <h2>FAQ</h2>
    <img src={ require('./images/covidearth.jpg') } alt="Corona Virus Global Pandemic" width="30%"  />
   
    <h3>How can I find free covid testing near me? <br/>
      <i>Navigate to <a href= "/">home</a> and simply type in your city or zipcode and location markers for the facilities you can visit will appear.</i>
    </h3>

    <h3>How can I find free testing?<br/>
      <i>By law Covid-19 testing is free in the United States. Check the laws for your country.</i>
    </h3>

    <h3>How can I add a new facility to the finder tool?<br/>
      <i>Our Covid-19 test facility finder tool is powered by Google Maps and to start the process of adding a new facility please <a target="_blank" rel="noopener noreferrer" href="https://support.google.com/business/answer/9919067?hl=en">go here.</a></i>
    </h3>

    <h3>What are the Covid-19 Symptoms?<br/>
      <i>Symptoms can range from very mild to life threatening. Common symptoms are fever, cough, and shortness of breath. </i>
    </h3>
    
     </div>);
}

function Support() {
  return (<div>
  
    <h2>Support</h2>
  
   
    <h3>See a bug or technical issue?</h3>
     

    <h3>Email: FreeCovidTestingNearMe@mail.com </h3>
    
     </div>);
}


//  class Share extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Share this site on social media. Facebook, Instagram, Twitter</h3>
//       </div>
//     )
//   }
// }
