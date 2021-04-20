import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from '../../../i2-features/f0-auth/a1-ui/LoginPage'
import FridayPage from '../../../i2-features/f1-friday/f1-ui/FridayPage'
import Me from '../m3-me/Me'

export const PATH = {
    LOGIN: {URL: '/login', isPublic: true},
    FRIDAY: {URL: '/friday', isPublic: false},
}

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => (<Redirect to={PATH.LOGIN.URL}/>)}/>

            <Route path={PATH.LOGIN.URL} exact render={() => (<LoginPage/>)}/>
            <Route path={PATH.FRIDAY.URL} exact render={() => (<Me><FridayPage/></Me>)}/>

            <Route render={() => (<div>404</div>)}/>
        </Switch>
    )
}

export default Routes
