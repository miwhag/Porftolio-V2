import React from 'react'
import PDF from '../../../Images/Resume.pdf';
import Footer from '../../Footer/Footer'
import '../../../Styles/Resume/Resume.css'




export default function DownloadResume() {

    return (
        <>
        <div className="resume">

            <div id="Resume-title-container">
            <h1 id="Resume-section-title">Resume</h1>
            <div id="Resume-title-block"></div>

            </div>
         
            <div className="resume-download-container">
            <iframe title="resume" className="resume-pdf" src={PDF}></iframe>
            <img src="https://i.ibb.co/R3hN5kD/Screen-Shot-2020-04-11-at-8-27-51-PM.png" alt="img-resume" id="img-resume"/>
            <div className="button-container">
            <a href = {PDF} target = "_blank"><button class="download-resume-button">Download PDF</button></a>      
            </div> 
            </div> 
        </div>

        <Footer/>
        </>
    )
}
