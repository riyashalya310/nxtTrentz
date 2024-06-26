import { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductItemDetails from "./components/ProductItemDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import CartContext from "./components/context/CartContext";
import "./App.css";
import Checkout from "./components/checkout";

class App extends Component {
  state = {
    cartList: [],
  };

  addCartItem = (product) => {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, product],
    }));
  };

  deleteCartItem = (product) => {
    this.setState((prevState) => ({
      cartList: [prevState.cartList.filter((item) => item.id !== product)],
    }));
  };

  render() {
    const { cartList } = this.state;

    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <ProtectedRoute exact path="/checkout" component={Checkout} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
