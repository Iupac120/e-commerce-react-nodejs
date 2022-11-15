
import { Add, Remove } from '@material-ui/icons'
import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import {addProduct} from '../redux/cartRedux'
import {useDispatch} from 'react-redux'

const Container = styled.div``
const Wrapper = styled.div`
    padding:20px;
    display:flex;
    ${mobile({padding:'10px',flexDirection:'column'})}
`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({height:'40vh'})}
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({padding:'0 10px'})}
`
const Title = styled.h1`
    font-weight:600;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight:200;
    font-size:40px;
`
const FilterContainer = styled.div`
    width:50%;
    margin:20px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({width:'100%'})}
`
const Filter = styled.div`
    display:flex;
    align-items:center;

`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0 5px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({width:'100%'})}
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:0px 2px;
    font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`
const Button = styled.button`
    padding:8px;
    border:2px solid teal;
    background-color:green;
    color:white;
    cursor:pointer;
    font-weight:500;
    ${mobile({margin:'10px 0'})}
    &:hover{
        background-color:red;
        cursor:pointer;
        transform:scale(1.2 )
    }
`


const Product = () => {
    
const location = useLocation()
const id = location.pathname.split("/")[2]
console.log('id',id)

const [product,setProduct] = useState({})
const [quantity,setQuantity] = useState(1)
const [color,setColor] = useState("")
const [size,setSize] = useState("")
const dispatch = useDispatch()

useEffect(()=>{
    const getProduct=async()=>{
        try{
            const res = await axios.get(`http://localhost:3500/api/v1/product/${id}`)
            setProduct(res.data)
        }catch(err){

        }
    }
    getProduct()
},[id])
const handleQuantity=(q)=>{
    if(q === "inc"){
        setQuantity((prev)=>(
            prev + 1
        ))
    }else{
        setQuantity((prev)=>(
           quantity >1 && prev -1
        ))
    }
}
const handleCart=()=>{
    dispatch(addProduct({...product, quantity,color,size}))
}
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Description>{product.desc}
                </Description>
                <Price>$ {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle onClick={(e)=>setColor(e.target.value)}>Color</FilterTitle>
                        {product.color?.map((c,i)=>(
                            <FilterColor color={c} key={i} />
                        ))}       
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((s,i)=>(
                            <FilterSizeOption key={i}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Add onClick={()=>handleQuantity("inc")}/>
                        <Amount>{quantity}</Amount>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                    </AmountContainer>
                    <Button onClick={handleCart}>Add To Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product