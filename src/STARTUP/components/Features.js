import React from 'react'
import { Button } from 'rsuite'
import styled from 'styled-components'
import tracks from '../../ASSETS/tracks.webp'
import feature1 from '../../ASSETS/Features1.png'
import feature2 from "../../ASSETS/Features2.png"
import feature3 from "../../ASSETS/Features3.png"
const Features = () => {
  return (
    <Block>
        <div className='advantages'>
            <h3>E-Features</h3>
            <Button size='lg' appearance='primary' color='orange'>Learn More</Button>
        </div>
        <div className='features'>
            <div className='containers-1'>
            <img src={feature1} alt="loading"/>
            <p>It's very easy to order a train ticket<br/>online.E-ticket can not be lost or<br/> forgotten at home.</p>
            </div>
            <div className='containers-1'>
            <img src={feature2} alt="loading"/>
            <p>There's no need to go to the ticket office<br/>additionally before your trip. Save your<br/> money and nerves</p>
            </div>
            <div className='containers-1'>
            <img src={feature3} alt="loading"/>
            <p>To order all tickets all you need is internet,<br/>couples minutes and a payment card<br/>Grab bounces and disconts</p>
            </div>
        </div>
    </Block>
  )
}
export default Features
const Block= styled.div`
margin-top: 20px;
height: 600px;
width: 100%;
display: flex;
flex-direction:column;
padding: 70px 70px 70px 70px;
background: linear-gradient(
      to top,
      rgb(0 0 0 / 52%),
      rgb(235 118 13  / 73%)
    ), url(${tracks});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
color: white;
.advantages{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.features{
    display: flex;
    justify-content: space-around;
    margin-top: 80px;
    .containers-1{
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:10px;
        img{
            height: auto;
            transition: 0.3s all ease-in-out;
        }
        p{
            margin-top: 30px;
            display: block;
            text-align: center;
        }
    }
}

`;