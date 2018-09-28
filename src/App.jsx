import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import NavBar from './NavBar';
import Home from './Home';
import About from './About';

import CssBaseline from '@material-ui/core/CssBaseline';
import './app.css';

function PropsRoute({ component: Component, ...props}) {
  return (<Route 
      { ...props }
      render={ renderProps => (<Component { ...renderProps } { ...props } />) }
    />
  )
}

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <div className="app">
            <PropsRoute component={NavBar} />
            <div id="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);