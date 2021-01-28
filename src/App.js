import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";
//Animation
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetails />
        </Route>        
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
