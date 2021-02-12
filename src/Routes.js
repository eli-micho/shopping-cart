import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import App from './App';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/checkout' component={Checkout} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
