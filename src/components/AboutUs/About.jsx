import React from 'react'
import home1 from '../../img/home1.png'
import { AboutDiv, Description, Hide, Image } from "./styles.js"

function About() {
    return (
        <AboutDiv>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>I work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true. </h2>
                    </Hide>
                </div>
                <p>Contact me for your next photography shoot</p>
                <button> Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="" />
            </Image>
        </AboutDiv>
    )
}




export default About
