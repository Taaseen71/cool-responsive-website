import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #1b1b1b;
    font-family: 'Poppins', sans-serif;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    border-radius: 3rem;
    outline: none;
    &:hover {
        background-color: #23d997;
        color: white;
    }
    &:active{
        background-color:#178a5f;
        border: 3px solid #178a5f;
        transform: translateY(1px); 
    }
}
h1{
    text-align: center;
    color: white;
    font-family: 'Dancing Script', cursive;
    font-size: 5rem;
    margin: 1rem;
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: white;
}
h4{
    font-weight: bold;
}
span{
    font-weight: bold;
    color: #23d997;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;

}











`
export default GlobalStyles;