import React from 'react'
import styled from 'styled-components';
import Railway  from '@mui/icons-material/DirectionsRailway';
import "rsuite/dist/rsuite.min.css"
import { Button } from 'rsuite';
const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>
        <Railway className='rail-logo'/>
        <h4>TrainWhisper</h4>
      </div>
      <div className='buttons'>
        <Button color='green' appearance='primary' className='btn'>Sign In</Button>
        <Button color='green' appearance='primary' className='btn'>Register</Button>
      </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
border: 2px solid black;
background: black;
color: white;
padding-left: 30px;
padding-right: 30px;
position: fixed;
z-index: 1;
.logo{
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    height: 50px;
    .rail-logo{
      font-size: 30px;
      margin-right: 4px;
    }
    h2{
      margin: 2px;
    }
}
.buttons{
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    .btn{
      margin-left: 10px;
      margin-right: 10px;
    }
}

`;