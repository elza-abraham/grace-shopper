import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {AuthRoute, Login, Signup} from './auth'
import Products from './Products'
import Home from './Home'
import NoMatch from './NoMatch'

const Routes = () => (
  <div className='fill-xy center-xy column'>
    <Switch>
      <Route exact path='/' component={Products} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <AuthRoute path='/home' component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default Routes
