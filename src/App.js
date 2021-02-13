import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

//Layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

//Pages
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';

//Styles
import './default.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  };

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />

        <Route exact path="/shop" render={() => (
          <MainLayout>
            <Shop addToCart={addToCart}/>
          </MainLayout>
        )} />

        <Route exact path="/checkout" render={() => (
          <MainLayout>
            <Checkout />
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
