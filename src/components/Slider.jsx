import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import { mobile } from '../responsive'
import React, { useState } from 'react'
import styled from 'styled-components'
import {slideItems} from '../data'

const Container =styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:coral;
    position:relative;
    margin-top:10px;
    overflow:hidden;
    ${mobile({display:'none'})}
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#e9e9e9;
    border-radius:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    margin:auto;
    opacity:0.5px;
    cursor:pointer;
    z-index:2
`
const Wrapper = styled.div`
    height:100%;
    display:flex;
    flex-direction:row;
    tansition:al  1.5s ease;
    transform:translateX(${props=>props.slideIndex * -100}vw)


`
const Slide = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    background-color=${props=>props.bg}
`
const ImageContainer = styled.div`
    flex:0 0 50%;
    max-width:50%;
    height:80%;
`
const Image = styled.img`
    height:80%;
    text-align:center;
`

const InfoContainer = styled.div`
    flex:0 0 50%;
    max-width:50%;
    padding:50px
`
const Title = styled.h1`
    font-size:70px;
`
const Description = styled.p`
    margin:50px 0;
    font-size:20px;
    font-weight:500;
    letter-spacing:1px
`
const Button = styled.button`
    padding:10px;
    cursor:pointer;
    background-color:black;
    color:white
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0); 
    const handleClick =(direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0?slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex < 2?slideIndex + 1:0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={handleClick}>
            <ArrowLeft />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        { slideItems.map((item)=>(  
            <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>BUY NOW</Button>
            </InfoContainer>
            </Slide>
        ))}  
        </Wrapper>
        <Arrow direction="right" onClick={handleClick}>
            <ArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider