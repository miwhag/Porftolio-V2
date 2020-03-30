import React from 'react'
import mediumImage from '../../../../Images/medium_article.png'
import Typewriter from './Typewriter'
import Fade from 'react-reveal';

export default function BlogHome() {
    return (
        <>

        <div className="BlogHome-container">
            
            <Fade bottom delay={1400}>
                <section className="BlogHome-image-container">
                <img className="BlogHome-medium-image" src={mediumImage} alt="Medium"/>
                </section>
            </Fade>

            <section className="BlogHome-typewriter-container">
                <Typewriter/>
            </section>
        </div>
        </>
    )
}
