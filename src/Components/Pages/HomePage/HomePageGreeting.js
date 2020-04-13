import React from 'react'
import '../../../Styles/HomePage/HomePage.scss'

export default function HomePageGreeting() {
    return (
    <div className="greeting-container"> Miwha Geschwind
        <p id="title">Full Stack Developer & Designer </p>
        <p id="about">
            Denver native, dog mom to two, and trained fullstack developer with a passion for frontend and design. 
            Currently working on projects with React, Node, and Ruby on Rails. 
        </p>

        <section className="Mobile-link-content">
            <a href ="mailto:miwha.geschwind@gmail.com"><img src={"https://i.ibb.co/HCqybSP/mail-2.png"} className="Footer-links" alt="signature"/></a>  
            <a href ="https://github.com/miwhag" target="_blank"><img src={"https://i.ibb.co/NyYsL14/github-2.png"} alt="signature" className="Footer-links"/></a>  
            <a href ="https://www.linkedin.com/in/miwha-geschwind/" target="_blank"><img src={"https://i.ibb.co/fqvzWXm/linkedin-4.png"} className="Footer-links" alt="signature"/></a>  
            <a href ="https://medium.com/@miwhag" target="_blank"><img src={"https://i.ibb.co/SN6dkxZ/medium.png"} className="Footer-links"alt="phone"/></a>  
        </section>
   </div>
    )
}
