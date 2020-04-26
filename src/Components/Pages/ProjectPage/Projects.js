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
                    <a href="https://github.com/miwhag/cake-frontend" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Build a Cake</h1>
                    <p className="project-about"> Build a virtual cake! Decide on flavors, finish and accents. </p>
                    <img className="capstone" src="https://media.giphy.com/media/Rhx2lZY8btpE0IFeOv/giphy.gif" alt="capstone"/> 
                </div>
                

                <div className="project">
                    <a href="https://github.com/miwhag/wildlife_rescue_finder_frontend" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Rescue Finder</h1>
                    <p className="project-about">All about the Australian bush fires and information on rescues in the area.</p>
                    <img className="mod-4" src="https://media.giphy.com/media/XClPyLQIs3S7UStP1s/giphy.gif" alt="mod4-gif"/> 
                </div>

                <div className="project">
                    <a href="https://devsdoinggood.org/" target="_blank"><img className="Project-github-logo" src="https://i.imgur.com/c2uBBiG.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Devs Doing Good</h1>
                    <p className="project-about">One of my goals for the year was to create a meetup group dedicated to service and volunteer projects. This is the site for that group.</p>
                    <img className="mod-4" src="https://i.imgur.com/BFMPvkU.png" alt="mod4-gif"/> 
                </div>


                <div className="project">
                    <a href="https://dangerpets.com/" target="_blank"><img className="Project-github-logo" src="https://i.imgur.com/c2uBBiG.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Danger Pets</h1>
                    <p className="project-about"> Hackathon Ludum Dare Game built in 72 hours </p>
                    <img className="capstone" src="https://media.giphy.com/media/LpdUNWP10kFzLbJn5v/giphy.gif" alt="capstone"/>
                </div>

                <div className="project">
                    <a href="https://github.com/miwhag/2020_Portfolio-" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Portfolio - V1</h1>
                    <p className="project-about"> React Portfolio you are on currently.</p>
                    <img className="portfolio-gif" src="https://media.giphy.com/media/dyjHz8jNS0gZv7T4HM/giphy.gif" alt="portfolio-gif"/> 
                </div>   

                <div className="project">
                    <a href="https://github.com/miwhag/ultimate-frontend" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Ultimate Frisbee App</h1>
                    <p className="project-about"> A schedule app and roster page for a ultimate frisbee team.</p>
                    <img className="frisbee-gif" src="https://media.giphy.com/media/SA5pNfjikBPS4QEdWL/giphy.gif" alt="frisbee-gif"/>
                </div>

                <div className="project">
                    <a href="https://github.com/miwhag/Mod-2-project-coffee-frontend" target="_blank"><img className="Project-github-logo" src="https://i.ibb.co/NyYsL14/github-2.png" alt="github-logo"/></a> 
                    <h1 className="project-title">Coffee Inventory App</h1>
                    <p className="project-about"> A inventory app for a coffee shop to keep track of the grounds they have on hand.</p>
                    <img className="coffee-gif" src="https://media.giphy.com/media/Y0s3SagTdHtxi1y0fG/giphy.gif" alt="coffee-gif"/>  
                </div>
           </main>
        </div>
    )
}

