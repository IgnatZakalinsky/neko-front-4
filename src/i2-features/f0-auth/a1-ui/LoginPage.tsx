import React, {ChangeEvent, useState} from 'react'
import {instance} from '../../../i1-main/m3-dal/instance'
import {Redirect} from 'react-router-dom'
import {PATH} from '../../../i1-main/m1-ui/m2-routes/Routes'

const LoginPage = () => {
    const [pass, setPass] = useState('')
    const changePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
    }
    const [error, setError] = useState('')
    const [isOk, setOk] = useState(false)

    const login = async () => {
        try {
            const answer = await instance.post('auth/login', {pass})

            localStorage.setItem('neko-front-4-token', answer.data.token)
            // console.log(answer.data)
            setOk(true)
        } catch (e) {
            const er = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')

            console.log(er)
            setError(er)
        }
    }

    if (isOk) return <Redirect to={PATH.FRIDAY.URL}/>

    return (
        <div>
            pass:
            <input value={pass} onChange={changePass}/>
            <button onClick={login}>login</button>
            {error}
        </div>
    )
}

export default LoginPage
