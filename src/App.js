import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import the 4 main pages
// import HomePage from "./components/HomePage/HomePage";
import HomePage2 from "./components/HomePage/HomePage2";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";

// Page components
import HeaderSocial from './components/HeaderSocial/HeaderSocial';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Footer from './components/Footer/Footer';
import CookieConsent from "react-cookie-consent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CookieConsent
                location="bottom"
                buttonText="I understand"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B", textAlign: "left"}}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.{" "}
                <span style={{ fontSize: "10px" }}>
                By accessing this site you consent to the use of cookies.
                </span>
          </CookieConsent>
          <HeaderSocial leftText="Ezequiel Gutierrez - Software Engineer"/>
          <HeaderMenu/>
          
          <Switch>
            <Route exact path="/" component={HomePage2} />
            <Route exact path="/contact" component={ContactUsPage} />
            
          </Switch>
          
          <Footer/>
          <HeaderSocial leftText="Ezequiel Gutierrez - Software Engineer"/>
        </div>
      </Router>
    );
  }
}

export default App;
