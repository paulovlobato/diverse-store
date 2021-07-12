import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import List from './Product/List';
import Show from './Product/Show'
import Home from './Home';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import NotFound from './NotFound';

/*
  App's Main Component / Routing
*/

function App() {
  return ( <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/product/list' exact={true} component={List}/>
      <Route path={`/product/show/:productId`}>
        <Show />
      </Route>
      <Route path='/cart' exact={true} component={ShoppingCart}/>
      
      <Route path='*' component={NotFound}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
