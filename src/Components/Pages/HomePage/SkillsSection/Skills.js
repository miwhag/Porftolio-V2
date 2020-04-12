import React from 'react'
import Fade from 'react-reveal/Fade'

export default function HomePageBlocks(){
    return (

            <section className="Skills-main-container">
                <div className="Skills-about-me-greeting">
                <Fade top><h1>Nice to Meet You.</h1>
                   <div id="Skills-greeting-block"></div></Fade> 
                    <p> Driven by curiousity, constant learning, new adventures and challenges. Before tech I previously worked in the pastry industry as a cake decorator, food stylist, tutorial writer and production assistant. <br></br><br></br>
                    Eventually I found myself in the insurance industry, but throughout all of my experiences was always striving to bring as much creativity into my work. As of April 2020 I will be a Flatiron School graduate of the Fullstack program and excited to be a part of the Denver Tech Community. <br></br></p>
                </div>
        
                <div className="Skills-box-container">
                    <section className="box-1">
                        <img class="Skills-icon" src="https://i.ibb.co/hK1jVjG/coding.png" alt="frontend"/>
                        <h3 className="Skills-header-text">Frontend</h3>
                        <p className="Skills-header-sub-text"> I value clean websites, interesting interactivity, and captivating features. </p>
                        <ul className="Skills-box-text-content">
                            <li>React </li>
                            <li>HTML/CSS</li>
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
                                <li>Node.js</li>
                                <li>Heroku</li>
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
                            </ul>
                    </section>
                </div>
                <div className="divider"></div>
            </section>
    ) 
}

