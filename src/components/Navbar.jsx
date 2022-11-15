import { Badge } from '@material-ui/core'
import {  Search, ShoppingCartRounded } from '@material-ui/icons'
import {mobile} from '../responsive'
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Container = styled.div`
  height: 60px;
  ${mobile({height:'50px'})};
 
`
const Wrapper = styled.div`
  padding:  10px 20px;
  display:  flex;
  justify-content:space-between;
  ${mobile({padding:'10px 0px'})}

`
const Left = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
  align-items:center
`
const Language = styled.span`
  font-size:14px;
  cursor:pointer;
  ${mobile({display:'none'})}
`
const SearchContainer = styled.div`
  border: 1px solid black;
  display:flex;
  align-items:center;
  margin-left:25px;
  padding:5px;
  ${mobile({marginLeft:'5px'})}
`
const Input = styled.input`
  border: none;
  ${mobile({width:'50px'})}
`
const Center = styled.div`
flex: 1;
text-align:center
`
const Logo = styled.h1`
  font-weight:bold;
  ${mobile({fontSize:'20px'})}
`
const Right = styled.div`
flex: 2;
display:flex;
justify-content:flex-end;
align-items:center;
${mobile({flex:2,justifyContent:'center'})}
`
const MenuItems = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:5px;
  ${mobile({fontSize:'12px',marginLeft:'10px'})}
`


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  
  console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
              <Input placeholder='search'/>
              <Search style={{fontSize:12}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Augustine.</Logo>
        </Center>
        <Right>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <Link to="/cart">
          <MenuItems>
           <Badge badgeContent={quantity} color="primary">
             <ShoppingCartRounded/>
            </Badge>
          </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>

  )
}

export default Navbar