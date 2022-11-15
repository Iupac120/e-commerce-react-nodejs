import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {useHistory} from "react-router-dom"
import StripeCheckout from 'react-stripe-checkout'
const KEY ="pk_test_51Lp9CbDm9S5zlYtAfKBo2yVBiXpnauQbtohUbLI0d54a46QtVgz2SEmPSAwv49WN5dwc6gynZAfmkg23udt2Xk2P00hMXWyDTF"
const Pay = () => {
    const [stripeToken,setStripeToken] = useState(null)
    const onToken = (token)=>{
        setStripeToken(token)
    }
    useEffect(()=>{
        const history = useHistory()
        const makeRequest = async()=>{
            try{
                const res = await axios.post('http://localhost:3500/api/v1/',{
                    tokenId:stripeToken.id,
                    amount:2000
                })
                console.log(res.data)
                history.push("/success")
            }catch(err){
                console.log(err)
            }
        }
        stripeToken && makeRequest()
    },[stripeToken,history])
  return (
    <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        {stripeToken? (<span>Processing.Please Wait...</span>):(
            <StripeCheckout name="Austech"
                        img="https://th.bing.com/th/id/OIP.7pruanBpQ_E1UHtHF1EzpAHaES?w=307&h=180&c=7&r=0&o=5&pid=1.7"
                        billingAddress
                        shippingAddress
                        description="your total is $20"
                        amount={2000}
                        token={onToken}
                        stripeKey={KEY}
        >
        <button style={{
            border:"none",
            width:"120",
            borderRadius:"5",
            padding:"120",
            backgroundColor:"black",
            color:"white",
            fontWeight:"600",
            pointer:"cursor"
        
        }}>Pay Now</button>
        </StripeCheckout>
        
        )}
        
    </div>
  )
}

export default Pay