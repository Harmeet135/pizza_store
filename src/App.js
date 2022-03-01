import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation1 from './components/Navigation1';
import Products from './pages/Productspage';
import Cart from './pages/Cart';
import Singleproduct from './pages/Singleproduct';
import Singleproduct2 from './pages/Singleproduct2';

const App = () => {
 
  return (
    <>
      <Router>
        {/* <CartContext.Provider value={}> */}
          <Navigation1 />
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Products" component={Products}></Route>
            <Route path="/Singleproduct" component={Singleproduct}></Route>
            <Route path="/Singleproduct2" component={Singleproduct2}></Route>
             
            <Route path="/Cart" component={Cart}></Route>
          </Switch>
        {/* </CartContext.Provider> */}
      </Router>
    </>
  )
}

export default App;