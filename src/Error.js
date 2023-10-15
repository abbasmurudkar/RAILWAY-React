import React from 'react'
import styled from 'styled-components';
import Errors from './ASSETS/error.png'
import { Button } from 'rsuite';
import { Link } from 'react-router-dom';
import Railway from "@mui/icons-material/DirectionsRailway";
const Error = () => {
  return (
    <Logopart>
    <div className="logo">
      <Railway className="rail-logo" />
      <h3>TrainWhisper</h3>
    </div>
    <Container>
      <div className='headers'>
        <img src={Errors} alt='Loading'/>
      </div>
     <div className='paragraph'>
        <h2>404- PAGE NOT FOUND</h2>
        <p>The page you are looking for might have been removed<br/>had its name changed or its temporarily changed</p>
     </div>
     <div className='Button'>
        <Link to="/"><Button color='blue' appearance='primary' size='lg'>GO TO HOME PAGE</Button></Link>
     </div>
    </Container>
    </Logopart>
  )
}

export default Error
const Logopart = styled.div`
width: 100%;
height: 100vh;
.logo{
    display: flex;
    align-items: center;
    margin-left: 40px;
    padding-top:5px; 
    h2{
        font-style: bolder;
        font-weight: bolder;
    }   
    .rail-logo{
        font-size: 35px;
    }
}

`;
const Container = styled.div`
height: 90%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.headers{
    width: 100%;

    text-align: center;
}
.paragraph{
    font-weight: bolder;
    margin-bottom: 40px;
    text-align: center;
    width: 100%;
    h2{
        margin: 15px;
    }
    p{
        font-style: bold italic;
    }
}
`;