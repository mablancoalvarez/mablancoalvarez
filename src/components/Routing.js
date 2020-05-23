import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Skills from './Skills';

const Routing = ()=>{


    return(

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
    )
}

export default Routing;