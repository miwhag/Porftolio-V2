import React, { Component } from 'react'
import '../../Styles/NavBar/Hamburger.scss'
import Menu from 'react-burger-menu/lib/menus/slide'




export default class Hamburger extends Component {

    state={
        menuOpen: false
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }

      closeMenu () {
        this.setState({menuOpen: false})
      }

    render(){
        return (
            <Menu right width={ '230px' }  isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>

              <a id="home" className="menu-item" href="/" onClick={() => this.closeMenu()} >Home</a>
              <a id="home" className="menu-item" href="/projects" onClick={() => this.closeMenu()} >Projects</a>
              <a id="about" className="menu-item" href="/download_resume" onClick={() => this.closeMenu()}>Resume</a>
              <a id="contact" className="menu-item" href="/contact" onClick={() => this.closeMenu()}>Contact</a>
            </Menu>
        )
    }
}
