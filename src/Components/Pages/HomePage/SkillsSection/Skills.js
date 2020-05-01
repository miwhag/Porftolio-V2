import React from 'react'
import Fade from 'react-reveal/Fade'

export default function HomePageBlocks(){
    return (

            <section className="Skills-main-container">
                <div className="Skills-about-me-greeting">
                <Fade top><h1>Nice to Meet You.</h1>
                   <div id="Skills-greeting-block"></div></Fade> 
                    <p> Full stack web developer with a passion for frontend and design. My background in cake design and pastry art education contributed to my abilities to build not only interesting projects but visually captivating ones as well. <br></br><br></br>
                    My technical experience includes Ruby on Rails, JavaScript, HTML/CSS/SCSS, React, Node/Express, Objection.js/Knex and Postgres. When not coding you can find me backpacking in the mountains with my two dogs or testing new recipes. <br></br></p>
                </div>
        
                <div className="Skills-box-container">
                    <section className="box-1">
                        <img class="Skills-icon" src="https://i.ibb.co/hK1jVjG/coding.png" alt="frontend"/>
                        <h3 className="Skills-header-text">Frontend</h3>
                        <p className="Skills-header-sub-text"> I value minimalistic and modern websites, interesting interactivity, and captivating features. </p>
                        <ul className="Skills-box-text-content">
                            <li>React </li>
                            <li>HTML</li>
                            <li>SCSS/CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                        
                        </ul>
                    </section>

                    <section className="box-2">
                        <img class="Skills-icon" src="https://i.ibb.co/cw4zn49/data-collection.png" alt="backend"/>
                        <h3 className="Skills-header-text">Backend</h3>
                            <p className="Skills-header-sub-text"> Organization of data models and connecting relationships is just one thing that I love about the backend </p>
                            <ul className="Skills-box-text-content">
                                <li>Ruby </li>
                                <li>Ruby on Rails</li>
                                <li>Node.js/Express</li>
                                <li>Objection.js/Knex</li>
                                <li>Postgres</li>
                            </ul>
                    </section>

                    <section className="box-3">
                        <img class="Skills-icon" src="https://i.ibb.co/7YPk7Ct/pencil.png" alt="design"/>
                        <h3 className="Skills-header-text">Design</h3>
                            <p className="Skills-header-sub-text"> Design is powerful and I am excited by the process of bringing things alive with the use of it.</p>
                            <ul className="Skills-box-text-content">
                                <li>Canva</li>
                                <li>Figma</li>
                                <li>Photoshop</li>
                                <li>Miro</li>
                            </ul>
                    </section>
                </div>
                <div className="divider"></div>
            </section>
    ) 
}

