import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from '../../i2-features/f0-auth/a1-ui/LoginPage'

export const PATH = {
    LOGIN: {URL: '/login', isPublic: true},
}

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => (<Redirect to={PATH.LOGIN.URL}/>)}/>

            <Route path={PATH.LOGIN.URL} exact render={() => (<LoginPage/>)}/>

            <Route render={() => (<div>404</div>)}/>
        </Switch>
    )
}

export default Routes
