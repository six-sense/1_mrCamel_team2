import RecentList from "./Pages/RecentList";
import ProductList from "./Pages/ProductList";
import DetailedProduct from "Pages/DetailedProduct";
import { Route, HashRouter } from "react-router-dom";


function App() {
  return (
    <>
      <HashRouter>
        <Route path="/" exact={true} component={ProductList} />
        <Route path="/product" component={DetailedProduct} />
      </HashRouter>
    </>
  );
}

export default App;
