import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import {Provider} from './Context/Context'
ReactDOM.render(

    <Provider>
        <App/>
    </Provider>,
    document.getElementById('root'));