import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height:60px;
  background-color:red;
  color:black;
  display:flex;
  jusstify-content:center;
  align-item:center;
  margin-top:10px;
  
`
const Text = styled.h3`
  text-align:center;
  margin-left:20px;
`

const Announcement = () => {
  return (
    <Container>
      <Text>Super Deal! Free Shipping Order on above $50</Text>
    </Container>
  )
}
export default Announcement