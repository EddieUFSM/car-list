import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Index from './pages/Index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/** Geral */}
                <Route exact path="/" render={(props) => <Index {...props} />} />
            </Switch>
        </BrowserRouter>
    )
}

