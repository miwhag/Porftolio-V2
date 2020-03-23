import React from 'react'


export default function HomePageBlocks(){
    return (

            <section className="Skills-main-container">
                <div className="Skills-about-me-greeting">
                    <h1>Nice to Meet You.</h1>
                    <p> Driven by curiousity, new adventures and challenges, I previously worked in the pastry industry as a cake decorator, food stylist, tutorial writer and production assistant. <br></br><br></br>
                    Eventually I found myself in the insurance industry, but throughout all of my  experiences always let my creativity be my driving force. Currently I am working towards being a Flatiron School graduate as of April 2020, and excited to be a part of the Denver Tech Community. <br></br></p>
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
                                <li>Express</li>
                                <li>Heroku</li>
                            </ul>
                    </section>

                    <section className="box-3">
                        <img class="Skills-icon" src="https://i.ibb.co/7YPk7Ct/pencil.png" alt="design"/>
                        <h3 className="Skills-header-text">Design</h3>
                            <p className="Skills-header-sub-text"> Design is powerful and I am excited by the process of bringing things alive with the use of it.</p>
                            <ul className="Skills-box-text-content">
                                <li>Canva</li>
                                <li>Miro</li>
                                <li>Figma</li>
                                <li>Photoshop</li>
                            </ul>
                    </section>
                </div>
                <div className="divider"></div>
            </section>
    ) 
}

