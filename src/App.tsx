import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { LoremIpsum } from './components/LoremIpsum'
import { NotFound } from './components/NotFound'
import { Home } from './routes/Home'

const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/foobar" component={LoremIpsum} />
                <Route path="/" exact component={Home} />
                <Route path="/" component={NotFound} />
            </Switch>
        </>
    )
}

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Routes />
            </Router>
        </>
    )
}

export default App
