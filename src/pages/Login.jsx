import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'



const Container = styled.div`
    width:200vh;
    height:100vh;
    background:url("https://th.bing.com/th/id/OIP.0587OYgy-4fwrSGC5EkBXgHaEK?w=298&h=180&c=7&r=0&o=5&pid=1.7");
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-size:cover;
    object-fit:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    ${mobile({width:'50vh'})}
`
const Wrapper = styled.div`
    width:25%;
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
    flex-direction:column;

`
const Input = styled.input`
    flex:1;
    margin:5px;
    padding:10px;
`

const Button = styled.button`
    background-color:rgba(144,80,215,0.8);
    width:20%;
    display:flex;
    align-item:center;
    justify-content:center;
    padding:10px 20px;
    cursor:pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color:rgba(109,190,71,0.3);
        transform:scale(1.1);
    }
`   
const Link = styled.a`
  margin:5px 0;
  font-size:15px;
  text-decoration:underline;
  cursor:pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>Do Not You Remember Your Password?</Link>
                <Link>Create A New Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login