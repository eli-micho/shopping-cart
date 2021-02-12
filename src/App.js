import React from 'react';
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
            <Shop />
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
