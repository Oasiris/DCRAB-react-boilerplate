import React from 'react'
import ReactDOM from 'react-dom'

import { ErrorBoundary } from './components/ErrorBoundary'

import App from './App'

// tslint:disable ordered-imports
import './styles/lib/bootstrap-grid.min.css'
import './styles/lib/normalize.css'
import './styles/index.scss'

ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById('root'),
)
