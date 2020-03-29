import { Link, animateScroll as scroll } from "react-scroll";
import '../../Styles/NavBar/NavBar.css'

import React from 'react'

export default function ScrollLink() {
    return (
        <Link 
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {800}
        className="Footer-navigation"
        to='header'>Scroll to Top</Link>
    )
}
