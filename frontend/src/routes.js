import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateProductScreen from "./screens/create";
import DeleteProductScreen from "./screens/delete";
import HomeScreen from "./screens/home";
import UpdateProductScreen from "./screens/update";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/update/:id' component={UpdateProductScreen} />
            <Route exact path='/delete/:id' component={DeleteProductScreen} />
            <Route exact path='/create' component={CreateProductScreen} />
        </Switch>
    </BrowserRouter>
);

export default Routes;