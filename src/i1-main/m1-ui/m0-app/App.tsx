import React from 'react'
import './App.css'
import Main from '../m1-main/Main'
import {HashRouter} from 'react-router-dom'

const App = () => {
    return (
        <div className='App'>
            <HashRouter>
                <Main/>
            </HashRouter>
        </div>
    )
}

export default App
