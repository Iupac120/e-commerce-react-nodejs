import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import {useSelector} from 'react-redux'


const Container = styled.div``
const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:'10px'})}
`
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px;
`
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${props=>props.type === 'filled' && 'none'};
    background-color:${props=>props.type === 'filled'?'black':'transparent'};
    color:${props=>props.type === 'filled' && 'white'};
`
const TopTexts = styled.div`
    display:flex;
    ${mobile({display:'none'})}
    
`
const TopText = styled.span`
    text-decoration:underline;
    margin:0 20px;
    cursor:pointer;
`
const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:'column'})}
`
const Info = styled.div`
    flex:3;
    background-color:lightgreen;
   
`
const Product = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({flexDirection:'column'})}
`
const ProductDetail = styled.div`
    display:flex;
`
const Image = styled.img`
    width:200px;
`
const Details = styled.div`
    flex:2;    
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    margin:20px;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    
`
const ProductSize = styled.span`
    
`
const PriceDetail = styled.div`
    flex:1;
    display:flex; 
    flex-direction:column;
    align-items:center;
    justify-content:center;
`


const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:30px;
`
const ProductAmount = styled.span`
    font-size:24px;
    margin:5px;
    ${mobile({margin:'5px 15px'})}
`
const ProductPrice = styled.div`
    font-size:24px;
    font-weight:300;
    ${mobile({marginBottom:'20px'})}
`
const Hr = styled.hr``
const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`
const SummaryTitle =  styled.h1`
    font-weight:300;
`
const SummaryItem =  styled.div`
    margin:30px 0px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-weight:${props=>props.type === 'total' && '500'};
    font-size:${props=>props.type === 'total' && '24px'};
`
const SummaryItemText =  styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    cursor:pointer;
    font-weight:600;
    transition:all 0.5s ease;
    &:hover{
        background-color:gray;
        transform:scale(1.1)
    }
`



const Cart = () => {
    const cart = useSelector(state=>state.cart)
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://th.bing.com/th/id/OIP.AAijZH4s42jelAQ9aCAgwQHaFL?w=245&h=180&c=7&r=0&o=5&pid=1.7'/>
                            <Details>
                                <ProductName><b>Product:</b>Brook Koekpa's Golf Shoe</ProductName>
                                <ProductId><b>ID:</b>5555634212</ProductId>
                                <ProductColor color="white"/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src='https://th.bing.com/th/id/OIP.rEhQy8fL1o_rG2cCfkBTMgHaLH?w=178&h=267&c=7&r=0&o=5&pid=1.7'/>
                            <Details>
                                <ProductName><b>Product:</b>Orange Work Shirt</ProductName>
                                <ProductId><b>ID:</b>7455634212</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>40</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$25</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$96</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$6.5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>-$4.3</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$95.9</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Checkout Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart