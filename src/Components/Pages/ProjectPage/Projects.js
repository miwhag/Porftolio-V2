import React from 'react'
import '../../../Styles/Projects/Projects.css'

export default function Projects() {
    return (
        <div className="Project-section-container">
            <div id="Project-title-container">
            <h1 className="Project-section-title">Projects</h1>
                <div id="Project-title-block"></div>
            </div>
        
           <main className="Project-project-container">
                <div className="project">
            
                <a href="https://github.com/miwhag/Mod-2-project-coffee-frontend" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Coffee Inventory App</h1>
                    <p className="project-about"> A inventory app for a coffee shop to keep track of the grounds they have on hand.</p>
                    <img className="coffee-gif" src="https://media.giphy.com/media/Y0s3SagTdHtxi1y0fG/giphy.gif" alt="coffee-gif"/>  
                    </div>

                    <div className="project">
                    <a href="https://github.com/miwhag/ultimate-frontend" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Ultimate Frisbee App</h1>
                    <p className="project-about"> A schedule app and roster page for a ultimate frisbee team.</p>
                    <img className="frisbee-gif" src="https://media.giphy.com/media/SA5pNfjikBPS4QEdWL/giphy.gif" alt="frisbee-gif"/>
                    </div>

                    <div className="project">
                    <a href="https://github.com/miwhag/2020_Portfolio-" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Portfolio - V1</h1>
                    <p className="project-about"> React Portfolio you are on currently.</p>
                    <img className="portfolio-gif" src="https://media.giphy.com/media/dyjHz8jNS0gZv7T4HM/giphy.gif" alt="portfolio-gif"/> 
                    </div>   

                    <div className="project">
                    <a href="https://github.com/miwhag/wildlife_rescue_finder_frontend" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Rescue Finder</h1>
                    <p className="project-about">All about the Australian bush fires and information on rescues in the area.</p>
                    <img className="mod-4" src="https://media.giphy.com/media/XClPyLQIs3S7UStP1s/giphy.gif" alt="mod4-gif"/> 
                    </div>


                    <div className="project">
                    <a href="" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Flatiron Capstone Project</h1>
                    <p className="project-about"> Wheels are turning but no project to present quite yet.</p>
                    <img className="capstone" src="https://i.ibb.co/CJ6CNPr/TBD.jpg" alt="capstone"/> 

                    </div>
           </main>
        </div>
    )
}

