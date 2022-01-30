import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About, Products } from '../pages'
import Layout from '../components/Common/Layout'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route path="/nosotros" component={About}/>
          <Route path="/productos" component={Products}/>
        </Layout>
      </Switch>
    </Router>
  )
}

export default Routes
