import React from 'react';
import '../stylesheets/App.scss';

import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import Header2 from './Header2';
import landing from '../images/landing.png';

class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App"> 
        <Switch>
          <Route exact path="/">

            <Home></Home>

          </Route>
          <Route exact path="/Aboutme">
            <Aboutme />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
          <Route exact path="/Skills">
            <Skills />
          </Route>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
