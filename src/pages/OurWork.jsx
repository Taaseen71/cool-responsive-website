import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import athlete from '../img/athlete-small.png'
import goodtimes from '../img/goodtimes-small.png'
import theracer from '../img/theracer-small.png'


function OurWork() {
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div class="line"></div>
                <Link>
                    <img src={athlete} alt="" />
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
`

const Movie = styled.div`
padding-bottom: 10rem;
.line{
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}

`
export default OurWork

