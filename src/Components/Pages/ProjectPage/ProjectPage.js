import React from 'react'
import Footer from '../../Footer/Footer'
import Projects from './Projects'
import '../../../Styles/Projects/Projects.css'

export default function ProjectPage() {
    return (
        <div>
            <main className="project-main-container">
            <Projects />
            </main>
            <Footer/>
        </div>
    )
}
