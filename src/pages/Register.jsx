import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width:200vh;
    height:100vh;
    background:url("https://th.bing.com/th/id/OIP.ZEKxGSdt2FPvlQ8ZkGIdvwHaDR?w=330&h=154&c=7&r=0&o=5&pid=1.7");
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-size:100% 100%;
    object-fit:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    ${mobile({width:'50vh'})}
`
const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color:white;
    ${mobile({width:'80%'})}
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300px;
`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;

`
const Input = styled.input`
    flex:1;
    margin:5px;
    padding:10px;
`
const Agreement = styled.span`
    margin:20px 0;
`
const Button = styled.button`
    background-color:rgba(144,80,215,0.8);
    padding:10px 20px;
    cursor:pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color:rgba(109,190,71,0.3);
        transform:scale(1.1);
    }
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating this account, I consent to the processing of my personal data in 
                    accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register