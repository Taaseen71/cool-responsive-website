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
                <Image>
                    <img src={home2} alt="" />
                </Image>
                <Description>
                    <h2>High <span> quality</span> services</h2>
                    <Cards>
                        <Card>
                            <div className="icon">
                                <img src={clock} alt="" style={{ width: "50px", height: "50px" }} />
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>

                        <Card>
                            <div className="icon">
                                <img src={teamwork} alt="" style={{ width: "40px", height: "40px" }} />
                                <h3>Teamwork</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>

                        <Card>
                            <div className="icon">
                                <img src={diaphragm} alt="" style={{ width: "40px", height: "40px" }} />
                                <h3>Diaphragm</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>

                        <Card>
                            <div className="icon">
                                <img src={money} alt="" style={{ width: "50px", height: "50px" }} />

                                <h3>Affordable</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>

                    </Cards>
                </Description>

            </ServicesDiv>
        </div>
    )
}

export default Services
