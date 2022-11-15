import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
import { mobile } from '../responsive'
import { useState } from 'react'
import { useEffect } from 'react'
import axios  from 'axios'



const Container = styled.div`
  display:flex;
  padding:20px;
  flex-wrap:wrap;
  justify-content:center;
  ${mobile({flexDirection:'column'})}
`

const Products = ({cat,filters,sort}) => {
  const [products,setProducts] = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])

  useEffect(()=>{
    const getProducts = async()=>{
      try{
        const res = await axios.get(cat? `http://localhost:3500/api/v1/product?category=${cat}`:'http://localhost:3500/api/v1/product')
        setProducts(res.data)
        console.log(res)
        console.log("home product",products)
      }catch(err){
        console.log(err)
      }
    }
    getProducts()
  },[cat])

  useEffect(()=>{
    cat && 
    setFilteredProducts(products.filter((item)=>
    Object.entries(filters).every(([key,value])=>
    item[key].includes(value))))
  },[products,cat,filters])

  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts((prevState)=>
      [...prevState].sort((a,b)=>a.createdAt-b.createdAt)
      )
    }else if(sort === "asc"){
      setFilteredProducts((prevState)=>
      [...prevState].sort((a,b)=>a.price-b.price)
      )
    }else{
      setFilteredProducts((prevState)=>
      [...prevState].sort((a,b)=>b.price-a.price)
      )
    }
  },[sort])
  //console.log(category,filter,sort)
  return (
    <Container>
      {cat
      ? filteredProducts.map((item)=>(
        <Product item={item} key={item.id}/>
      ))
    :products.slice(0,8).map((item)=>(
      <Product item={item} key={item.id}/>
    ))}
    </Container>
  )
}

export default Products