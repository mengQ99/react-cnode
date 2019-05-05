import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Index from '../view/index';
import Book from '../view/book';
import About from '../view/about';
import User from '../view/user';
import Details from '../view/details';

class RouterIndex extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <Redirect path="/index"/>}/>
        <Route path="/index" component={Index}/>
        <Route path="/book" component={Book}/>
        <Route path="/about" component={About}/>
        <Route path="/user" component={User}/>
        <Route path="/details" component={Details}/>
      </Switch>      
    )
  }
}

export default RouterIndex