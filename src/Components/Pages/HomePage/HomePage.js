import React from 'react'
import HomePageGreeting from './HomePageGreeting'
import {StyledLogo} from './StyledLogo'
import Skills from './SkillsSection/Skills'
import Blog from './BlogSection/Blog'
import Divider from '../../Divider'
import CakeProjects from '../HomePage/CakeSection/CakeProjects'
import Footer from '../../Footer/Footer'
import '../../../Styles/HomePage/HomePage.scss'

export default function HomePage() {
    return (
        <div className="HomePage-main-container">
                 
            <header>
                <HomePageGreeting />
                <div id="StyledLogo-container">
                    <StyledLogo />
                </div>   
            </header>

            <main>
                <Skills />
                <Divider />
                <Blog />
                <Divider />
                <CakeProjects />
                <Footer />
            </main>

            <footer> 
    
            </footer>

        </div>
    )
}
