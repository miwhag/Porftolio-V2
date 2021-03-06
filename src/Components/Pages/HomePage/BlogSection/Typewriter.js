import React, { Component } from 'react';
import Typical from 'react-typical';
import '../../../../Styles/HomePage/Typewriter.scss';


export default class Typewriter extends Component {
    render(){
        return(
        <>

            <div id="Blog-section-container">
                <div className="typewriter">
                <h1 className="Typewriter-Header">Exploring</h1>
                <Typical 
                    steps={[
                        'Code',
                        1000,
                        'Bootcamp Life',
                        1000, 
                        'Design',
                        1000, 
                        'The Tech Industry',
                        1000, 
                        'My Journey',
                        1000, 
                        'Frontend Frameworks',
                        1000, 
                        'Data Modeling',
                        1000]}
                    loop={Infinity}
                    wrapper="Typewriter-response-wrapper"
                />
                </div>
                <a href ="https://medium.com/@miwhag" 
                    target="_blank" 
                    className="Typewriter-medium-link">
                        View Blogs
                </a>
                </div>
            </>
        )
    }
  }


 
  