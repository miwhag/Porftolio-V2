import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContactPage from '../Pages/ContactPage/ContactPage'
import ProjectPage from '../Pages/ProjectPage/ProjectPage'
import ResumePage from '../Pages/ResumePage/ResumePage'
import NavBar from './NavBar'
import HomePage from '../Pages/HomePage/HomePage'

  
  export default function NavBarRoutes() {
    return (
      <div>
        <Router>
        <NavBar/>
        <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/contact' component={ContactPage}/>
          <Route exact path='/projects' component={ProjectPage}/>
          <Route exact path='/download_resume' component={ResumePage}/>
        </Switch>
        </div>
      </Router>
      </div>
    )
  }
  