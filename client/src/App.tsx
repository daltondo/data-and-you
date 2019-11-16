import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Exhibit } from './Exhibit'
import { Survey } from './Survey'
import NotFound from './NotFound'

class App extends Component {
  render () {
    return <Router>
      <Switch>
        <Route path='/survey' component={Survey} />
        <Route path='/' exact component={Exhibit} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  }
}

export default App
