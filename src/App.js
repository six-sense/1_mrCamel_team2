import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailPage from 'Pages/ProductList';
import RecentList from 'Pages/RecentList';
import Sort from 'Components/Sort';
import DetailedProduct from 'Pages/DetailedProduct';
import Test from 'Components/Test';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DetailPage} />
          <Route exact path="/recentList" component={RecentList} />
          <Route exact path="/sort" component={Sort} />
          <Route exact path="/product" component={DetailedProduct} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default App;
