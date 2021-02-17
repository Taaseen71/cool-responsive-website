import React from 'react';
import { Faq } from './styles'

function FAQ() {
    return (
        <Faq>
            <h2> Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, excepturi!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Methods of payments do you accept?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, excepturi!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Whats your schedule?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, excepturi!</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

export default FAQ
