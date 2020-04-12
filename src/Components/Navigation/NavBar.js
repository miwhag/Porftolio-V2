import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../Styles/NavBar/NavBar.css'
import Hamburger from './Hamburger'

export default class NavBar extends Component{

    render(){
    
        return (
                <nav>
                    <ul className="nav-links">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/download_resume'>Resume</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>

                    <div className="burger-icon">
                    <Hamburger/>
                    </div>
               
                
            </nav>
        )

    }
}
