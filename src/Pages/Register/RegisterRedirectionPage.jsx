import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import RegisterMainPage from './RegisterMainPage/RegisterMainPage'
import BusinessInfoPageOne from './BusinessInfoPageOne'
import BusinessInfoPageTwo from './BusinessInfoPageTwo'

class RegisterRedirectionPage extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/register">
                        <RegisterMainPage/>
                    </Route>
                    <Route exact path="/register/2">
                        <BusinessInfoPageOne/>
                    </Route>
                    <Route exact path="/register/3">
                        <BusinessInfoPageTwo/>
                    </Route>
                </Switch>
            </>
        )
    }
}
export default RegisterRedirectionPage;