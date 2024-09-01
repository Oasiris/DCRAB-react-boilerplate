import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './routes/Home.tsx'
import Root from './routes/root.tsx'
import './styles/index.css'
import ErrorPage from './routes/error-page.tsx'

/*
HELPFUL LINKS:
- How to use JSX Routes in react-router: https://reactrouter.com/en/main/start/tutorial#the-contact-route-ui
*/

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* <Home /> */}
        <RouterProvider router={router} />
    </StrictMode>,
)
