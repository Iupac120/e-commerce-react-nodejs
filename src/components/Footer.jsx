import { Email, Facebook, Instagram, LinkedIn, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:'column'})}
`
const Left = styled.div`
    flex:1;
    display:flex;
    padding:20px;
    flex-direction:column;
`
const Logo = styled.h1`

`
const Description = styled.p`
    margin:20px;
    
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin:5px;
`
const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:'none'})}
`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItems = styled.li`
    width:50%;
    margin-bottom:10px;
`
const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:'#fff8f8'})}
`
const ContactItem = styled.div`
Margin-bottom:20px;
display:flex;
align-items:center;
justify-content:center;
`
const Payment = styled.img``

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AUSTECH</Logo>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nobis provident consectetur voluptas possimus aspernatur mollitia 
                maxime tenetur harum, odit placeat.
            </Description>
            <SocialContainer>
                <SocialIcon color='#3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='#E4405F'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='#55ACEE'>
                    <LinkedIn/>
                </SocialIcon>
                <SocialIcon color='#E60023'>
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Men Fashion</ListItems>
                <ListItems>Women Fashion</ListItems>
                <ListItems>Accessories</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>WishList</ListItems>
                <ListItems>Terms</ListItems>
            </List>
        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactItem>
                <Room style={{marginRight:'10px'}}/> B05 Temidire Street, Akure
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:'10px'}}/> +2347066791893
            </ContactItem>
            <ContactItem>
                <Email style={{marginRight:'10px'}}/> oforokpara@gmail.com
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer