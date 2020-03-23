import React from 'react'
import HomePageGreeting from './HomePageGreeting'
import {StyledLogo} from './StyledLogo'
import Skills from './SkillsSection/Skills'
import Blog from './BlogSection/Blog'
import '../../../Styles/HomePage/HomePage.scss'

export default function HomePage() {
    return (
        <div className="HomePage-main-container">
            <header>
               <HomePageGreeting />
               <StyledLogo />
            </header>

            <main>
                <Skills />
                <Blog />
            </main>

            <footer> 
    
            </footer>

        </div>
    )
}
