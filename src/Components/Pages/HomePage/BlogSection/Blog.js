import React from 'react'
import mediumImage from '../../../../Images/medium_article.png'
import Typewriter from './Typewriter'
import Fade from 'react-reveal';

export default function BlogHome() {
    return (
        <>
        <Fade right delay={1300}>
            <div id="Blog-title-container">
                <h1 id="Blog-title">My Blogs</h1>
                <div id="Blog-title-block"></div>
            </div>
        </Fade>

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
