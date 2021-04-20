import React from 'react'
import {instance} from '../../m3-dal/instance'
import {useHistory} from 'react-router-dom'
import {PATH} from '../m2-routes/Routes'

const Header = () => {
    const history = useHistory()

    const logout = () => {
        localStorage.setItem('neko-front-4-token', '')
        instance.delete('auth/me')
        history.push(PATH.LOGIN.URL)
    }

    return (
        <div>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default Header
