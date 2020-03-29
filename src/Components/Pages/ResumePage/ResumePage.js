import React from 'react'
import PDF from '../../../Images/Resume.pdf';
import Footer from '../../Footer/Footer'
import '../../../Styles/Resume/Resume.css'


export default function DownloadResume() {

    return (
        <>
        <div className="resume">
            <div className="resume-download-container">
            <img className="resume-image" src="https://i.ibb.co/nbVcQWY/Miwha-Geschwind-Resume.png" alt="Miwha-Geschwind-Resume"/>
            <div className="button-container">
            <a href = {PDF} target = "_blank"><button class="download-resume-button">Download PDF</button></a>      
            </div> 
            </div> 
        </div>

        <Footer/>
        </>
    )
}
