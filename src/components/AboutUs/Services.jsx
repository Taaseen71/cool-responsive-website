import React from 'react'
import clock from '../../img/clock.svg'
import diaphragm from '../../img/diaphragm.svg'
import money from '../../img/money.svg';
import teamwork from '../../img/teamwork.svg'
import home2 from '../../img/home2.png'
import { ServicesDiv, Description, Hide, Image, Cards, Card } from "./styles.js"


function Services() {
    return (
        <div>
            <ServicesDiv>
                <Description>
                    <h2>High <span> quality</span> services</h2>
                    <Cards>
                        <Card>
                            <div className="icon">
                                <img src={clock} alt="" />
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>

                        <Card>
                            <div className="icon">
                                <img src={teamwork} alt="" />
                                <h3>Teamwork</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>

                        <Card>
                            <div className="icon">
                                <img src={diaphragm} alt="" />
                                <h3>Diaphragm</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>

                        <Card>
                            <div className="icon">
                                <img src={money} alt="" />
                                <h3>Affordable</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>

                    </Cards>
                </Description>
                <Image>
                    <img src={home2} alt="" />
                </Image>
            </ServicesDiv>
        </div>
    )
}

export default Services
