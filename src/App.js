import RecentList from './Pages/RecentList';
import ProductList from './Pages/ProductList';
import DetailedProduct from 'Pages/DetailedProduct';
import { Route, HashRouter } from 'react-router-dom';
import DetailPage from 'Pages/ProductList';
import Sort from 'Components/Sort';
import Test from 'Components/Test';

function App() {
  return (
    <>
      <HashRouter>
        <Route path="/" exact={true} component={ProductList} />
        <Route path="/product" component={DetailedProduct} />
        <Route exact path="/" component={DetailPage} />
        <Route exact path="/recentList" component={RecentList} />
        <Route exact path="/sort" component={Sort} />
        <Route exact path="/test" component={Test} />
      </HashRouter>
    </>
  );
}

export default App;
