import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MenuPage } from './pages/MenuPage/MenuPage'
import AuthPage  from './pages/AuthPage/AuthPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/menu' exact>
                    <MenuPage />
                </Route>
                <Redirect to="/menu" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}