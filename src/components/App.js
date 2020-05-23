import React from 'react';
import '../stylesheets/App.scss';
import Footer from './Footer';
import Routing from './Routing';


class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
       
        <Routing/>
        {/* <Switch>
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
        </Switch> */}
        <Footer/>
      </div>

    );
  }
}

export default App;
