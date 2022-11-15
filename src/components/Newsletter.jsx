import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    flex-direction:column;
    ${mobile({height:'40vh'})}
`
const Title = styled.h3`
    font-size:70px;
    font-weight:300;
    margin-bottom:30px;
    ${mobile({fontSize:'40px'})}
`
const Description = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({textAlign:'center'})}
`
const InputContainer = styled.div`
    width:50%;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
`
const Input = styled.input`
    flex:8;
    border:none;
    padding-left:20px;
`
const Button = styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newletter</Title>
        <Description>Get Timely Update fro your favourite products</Description>
        <InputContainer>
            <Input placeholder='your email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter