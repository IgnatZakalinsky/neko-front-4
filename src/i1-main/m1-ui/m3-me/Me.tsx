import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import {PATH} from '../m2-routes/Routes'
import {instance} from '../../m3-dal/instance'

const Me: React.FC = ({children}) => {
    const [isOk, setOk] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const get = async () => {
            try {
                const token = localStorage.getItem('neko-front-4-token')
                if (!token) throw new Error('no token')

                // const answer =
                await instance.get('auth/me', {params: {token}})

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
        get()
    }, [])

    if (error) return (<Redirect to={PATH.LOGIN.URL}/>)

    if (isOk) return (<div>{children}</div>)

    return (<div>loading...</div>)
}

export default Me
