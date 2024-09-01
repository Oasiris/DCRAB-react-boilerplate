import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'

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
