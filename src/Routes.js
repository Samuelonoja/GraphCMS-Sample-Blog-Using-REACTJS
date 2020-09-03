import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import PostContent from './components/posts/PostContent'

export default function Routes() {
    return (
        <main className="h-100">
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/blog/:slug"><PostContent /></Route>
            </Switch>
        </main>
    )
}

