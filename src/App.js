import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductProvider } from "./Context/ProductsLibrary";
import { CartProvider } from "./Context/CartLibrary";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

import { Header } from "./components/Header/Header";
import { Product } from "./pages/Product/Product";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/product/:id">
                <Product />
              </Route>
            </Switch>
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
