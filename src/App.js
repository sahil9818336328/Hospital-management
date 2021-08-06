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
import './assets/css/home.css'

const App = () => {
  const { dispatch } = useGlobalContext()
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
  const [loading, setLoading] = useState(false)
  const [preloader, setPreloader] = useState(true)
  useEffect(() => {
    const preloader = document.querySelector('.preloader')
    window.addEventListener('load', function () {
      preloader.classList.add('hide__preloader')
      setLoading(true)
      setPreloader(false)
    })
  }, [])
  return (
    <React.Fragment>
      {preloader && (
        <div className='preloader'>
          <div className='wrap'>
            <div className='loader'>
              <div className='bounceball'></div>
              <div className='text'>NOW LOADING</div>
            </div>
          </div>
        </div>
      )}
      {loading && (
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
