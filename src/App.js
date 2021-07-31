import RecentList from "Pages/RecentList";
import ProductList from "Pages/ProductList";
import DetailedProduct from "Pages/DetailedProduct";

import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/product/:id" component={DetailedProduct} />
          <Route path="/product" exact={true} component={DetailedProduct} />
          <Route path="/recentList" component={RecentList} />
          <Route path="/" exact={true} component={ProductList} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
