import RecentList from "./Pages/RecentList";
import ProductList from "./Pages/ProductList";
import DetailedProduct from "Pages/DetailedProduct";
import { Route, HashRouter } from "react-router-dom";
// import DetailPage from 'Pages/ProductList';
import Sort from "Components/Sort";
import Test from "Components/Test";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={ProductList} />
      <Route path="/product/:id" component={DetailedProduct} />
      <Route path="/product" exact={true} component={DetailedProduct} />
      {/* <Route exact path="/" component={DetailPage} /> */}
      <Route path="/recentList" component={RecentList} />
      <Route path="/sort" component={Sort} />
      <Route path="/test" component={Test} />
    </HashRouter>
  );
}

export default App;
