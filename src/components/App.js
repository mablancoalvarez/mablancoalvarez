import React from 'react';
import '../stylesheets/App.scss';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';


class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about-me">
            <Aboutme />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
        <Footer/>
      </div>

    );
  }
}

export default App;
