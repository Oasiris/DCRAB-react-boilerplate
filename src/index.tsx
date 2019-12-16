import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './utils/serviceWorker'

import App from './App'

// tslint:dsaible ordered-imports
import './style/lib/bootstrap-grid.min.css'
import './style/lib/normalize.css'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
