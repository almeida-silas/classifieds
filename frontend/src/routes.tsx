import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateClassified from './pages/CreateClassified'

import Home from './pages/Home'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={CreateClassified} exact path="/create" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
