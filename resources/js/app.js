/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');





import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserContent from './components/Users/UserContent';
import UserDiscountReport from './components/Users/UserDiscountReport';
import UserEditProfile from './components/Users/UserEditProfile';

import UserLogin from './components/Users/UserLogin';
import BusinessLogin from './components/Business/BusinessLogin';
import HomeContent from './components/Home/HomeContent';

import BusinessContent from './components/Business/BusinessContent';
import BusinessCustomerReport from './components/Business/BusinessCustomerReport';
import BusinessCustomerSearch from './components/Business/BusinessCustomerSearch';
import BusinessNewCustomer from './components/Business/BusinessNewCustomer';
import BusinessSettingDiscount from './components/Business/BusinessSettingDiscount';
import BusinessEditProfile from './components/Business/BusinessEditProfile';
import UserBusinessReport from './components/Users/UserBusinessReport';














function App(){
    return(
        <BrowserRouter>

            <div>

                <Switch>

                    //home

                    <Route exact path="/" component={HomeContent}>

                    </Route>
                    <Route exact path="/user/login" component={UserLogin}>

                    </Route>
                    <Route exact path="/business/login" component={BusinessLogin}>

                    </Route>



                    //user

                    <Route exact path="/user/home" component={UserContent}>

                    </Route>

                    <Route exact path="/user/businessreport" component={UserBusinessReport}>

                    </Route>

                    <Route exact path="/user/discountsreport" component={UserDiscountReport}>

                    </Route>

                    <Route exact path="/user/editprofile" component={UserEditProfile}>

                    </Route>

                    //business

                    <Route exact path="/business/home" component={BusinessContent}>

                    </Route>

                    <Route exact path="/business/customerreport" component={BusinessCustomerReport}>

                    </Route>

                    <Route exact path="/business/customersearch" component={BusinessCustomerSearch}>

                    </Route>

                    <Route exact path="/business/newcustomer" component={BusinessNewCustomer}>

                    </Route>

                    <Route exact path="/business/settingdiscount" component={BusinessSettingDiscount}>

                    </Route>

                    <Route exact path="/business/editprofile" component={BusinessEditProfile}>

                    </Route>



                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;


if(document.getElementById('app')){
    ReactDOM.render(<App/>,document.getElementById('app'));
}