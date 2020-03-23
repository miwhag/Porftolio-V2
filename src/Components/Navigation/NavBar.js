import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../Styles/NavBar/NavBar.css'

export default class NavBar extends Component{


    state = {
        hamburgerOpen: false
    }

    handleClick = (event) => {
        event.preventDefault();

        if(this.state.hamburgerOpen === false){
            this.setState({ hamburgerOpen: true })
        } else {
            this.setState({ hamburgerOpen: false})
        }
    }

    render(){
    
        return (
                <nav>
                    <ul className="nav-links">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/download_resume'>Resume</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
    

                <div className="dropdown">

    
                        <div className="burger-icon" onClick={this.handleClick}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>



                    {this.state.hamburgerOpen ? (
                    <div className="hamburger-dropdown-content">
                        <Link to='/'>Home</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/download_resume'>Resume</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    ) : 
                     (null)}

            </div>
                
            </nav>
        )

    }
}
