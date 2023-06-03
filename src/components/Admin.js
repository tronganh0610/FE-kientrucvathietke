import React from 'react';
import Sidebar from './Sidebar/Sidebar';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from './layout/User/User';
import Product from './layout/Product/Product';

function Admin() {
    return (
        <div className='Admin'>
            <Router>
                <Sidebar />
                <Switch>
                <Route path='/user' component={User} />
                <Route path='/product' component={Product} />
                </Switch>
            </Router>
        </div>
    );
}

export default Admin;