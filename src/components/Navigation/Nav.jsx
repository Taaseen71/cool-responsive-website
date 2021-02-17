import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <NavDiv>
            <HeroName>
                {/* <a href="#">Saad's Photography</a> */}
                <Link to="/" style={{ color: 'white' }}>Saad's Photography</Link>
            </HeroName>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                    {/* <a href="#"></a> */}
                </li>
                <li>
                    <Link to="work">Our Work</Link>
                    {/* <a href="#">Our Work</a> */}
                </li>
                <li>
                    <Link to="contact">Contact Us</Link>
                    {/* <a href="#">Contact Us</a> */}
                </li>
            </ul>
        </NavDiv>
    )
}



const NavDiv = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    background-color: #282828;
    padding: 1rem 10rem;
    a{
        color: white;
        text-decoration: none;
        &:hover{
            transition: 0.5s ease-in-out;
            color: #FF1212;
        }
    }
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding: 0 2rem;
        position: relative;
    }
    #logo{
        font-size: 1.5rem;
    }
    

`
const HeroName = styled.h1`
    color: #FF1212;
    text-align: center;
    font-family: 'Dancing Script', cursive;
    font-size: 3rem;
    margin: 1rem;
`



export default Nav;
