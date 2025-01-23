import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style/lib/normalize.css'
import './style/lib/bootstrap-grid.min.css'
import './style/index.scss'

import App from './App'

/*
HELPFUL LINKS:
- How to use JSX Routes in react-router: https://reactrouter.com/en/main/start/tutorial#the-contact-route-ui
*/

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
