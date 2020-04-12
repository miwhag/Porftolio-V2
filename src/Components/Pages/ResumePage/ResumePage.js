import React from 'react'
import PDF from '../../../Images/Resume.pdf';
import Footer from '../../Footer/Footer'
import '../../../Styles/Resume/Resume.css'
import Fade from 'react-reveal';



export default function DownloadResume() {

    return (
        <>
        <div className="resume">

            <div id="Resume-title-container">
            <h1 id="Resume-section-title">Resume</h1>
            </div>
         
            <div className="resume-download-container">
            <iframe title="resume" className="resume-pdf" src={PDF}></iframe>
            <div className="button-container">
            <a href = {PDF} target = "_blank"><button class="download-resume-button">Download PDF</button></a>      
            </div> 
            </div> 
        </div>

        <Footer/>
        </>
    )
}
