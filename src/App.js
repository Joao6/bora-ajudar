import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Campaign from './Campaign'
import Admin from './Admin'
import Login from './Login'

import base from './base'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>        
          <Route exact path='/' component={Home}/>
          <Route path='/sobre' component={About}/>
          <Route path='/contato' component={Contact}/>
          <Route path='/campanhas' component={Campaign}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/login' component={Login}/>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App
