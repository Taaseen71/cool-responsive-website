//? STYLED COMPONENTS
import styled from 'styled-components'

export const AboutDiv = styled.div`
    min-height:90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

export const ServicesDiv = styled(AboutDiv)`
h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items:center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`

export const Description = styled.div`
    flex: 1;
    padding: 0 5rem;

    h2{
        font-weight: lighter;
    }
`

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%; //Setting width to full flex 1
        height: 80vh; //Changes height to acceptable size
        object-fit: cover; //maintains aspect ratio of 80vh without stretching it
        border-radius: 1rem;
    }
`
export const Hide = styled.div`
    overflow: hidden;
`

export const Faq = styled(AboutDiv)`
    display: block;
    span{
    display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height:0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        /* font-size: 2rem; */
    }
    .answer{
        p{
            font-size: 1rem;
        }
    }

`
