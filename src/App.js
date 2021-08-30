import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { useGlobalContext } from './context'
import { auth } from './firebase'
import Staff from './components/Staff'
import Doctors from './components/Doctors'
import $ from 'jquery'

const App = () => {
  const { dispatch } = useGlobalContext()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    $(function () {
      $('.loader').delay(2000).fadeOut('slow')
      $('#overlayer').delay(2000).fadeOut('slow')
      setLoading(false)
    })
  }, [])
  useEffect(() => {
    // event listner (keeps listening to change in authentication state)
    auth.onAuthStateChanged((authuser) => {
      // console.log('the user is ', authuser)

      // if user is truthy OR logged in
      if (authuser) {
        dispatch({
          type: 'SET_USER',
          user: authuser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <React.Fragment>
      <div id='overlayer'>
        <span className='loader'>
          <span className='loader-inner'></span>
        </span>
      </div>
      {!loading && (
        <Router>
          <Sidebar />
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard />
            </Route>
            <Route exact path='/staff'>
              <Staff />
            </Route>
            <Route exact path='/doctors'>
              <Doctors />
            </Route>
          </Switch>
          <Footer />
        </Router>
      )}
    </React.Fragment>
  )
}

export default App
