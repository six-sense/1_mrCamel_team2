import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailPage from 'Pages/ProductList';
import RecentList from 'Pages/RecentList';
import Sort from 'Components/Sort';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DetailPage} />
          <Route exact path="/product_list" component={RecentList} />
          <Route exact path="/sort" component={Sort} />
        </Switch>
      </Router>
    );
  }
}

export default App;
