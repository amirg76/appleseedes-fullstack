import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Spinner from './components/spinner/Spinner';
import Home from './pages/home/Home';
import DynamicVal from './components/dynamicVal/DynamicVal';
export default class App extends Component {
  state = { categories: [], isSpinnerOn: true };
  async componentDidMount() {
    try {
      const { data } = await axios.get('https://www.tronalddump.io//tag');
      const arrOfCatObj = data._embedded.tag;
      const arrOfCat = arrOfCatObj.map((cat) => cat.value);
      this.setState({ categories: arrOfCat, isSpinnerOn: false });
    } catch (err) {}
  }
  render() {
    return (
      <div>
        <Router>
          {/* {!(this.state.categories.length > 0) && <Spinner />} */}
          {this.state.isSpinnerOn && <Spinner />}
          {!this.state.isSpinnerOn && (
            <Navbar categories={this.state.categories} />
          )}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/donaldthinks/:category'
              component={DynamicVal}
            />
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </Router>
        {/* routes */}
      </div>
    );
  }
}
