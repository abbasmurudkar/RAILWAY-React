import React from "react";
import styled from "styled-components";
import Railway from "@mui/icons-material/DirectionsRailway";
import "rsuite/dist/rsuite.min.css";
import { Button, Dropdown } from "rsuite";
import Background from "../ASSETS/background.jpeg";
import NavbarBrand from "rsuite/esm/Navbar/NavbarBrand";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigations = [
    {
      Item: "Home",
      Link: "#"
    },
    {
      Item: "About",
      Link:"#",
    },
    {
      Item:"Blog",
      link: "#"
    },
    {
      Item: "Gallery",
      link: "#",
    }
  ]
  return (
    <Continer>
      <Navs>
        <div className="logo">
          <Railway className="rail-logo" />
          <h4>TrainWhisper</h4>
        </div>
      <NavigationLinks>
        <div className="links">
        {navigations.map((item,key)=>{
          return <Link to={item.link} key={key} style={{color:"white",textDecoration:"none"}}><p >{item.Item}</p></Link>
        })}
        </div>
      </NavigationLinks>
        <div className="buttons">
          <Button size="md" color="green" appearance="primary" className="btn">
            Sign In
          </Button>
          <Button color="green" size="md"  appearance="primary" className="btn">
            Register
          </Button>
        </div>
      </Navs>
    </Continer>
  );
};

export default Navbar;
const Continer = styled.div`
background-image: linear-gradient(to top,rgb(0 0 0 / 52%),rgb(210 210 233 / 73%)) ,url(${Background});
background-position: center;
background-size:  cover;
background-repeat: no-repeat;
width: 100%;
height: 750px;
`;
const NavigationLinks = styled.div`

display: flex;
justify-content: space-evenly;
width: 800px;
border: 2px solid violet;
.links{
display: flex;
width: 100%;
justify-content: space-evenly;
align-items: center;
p{
  font-size: 18px;
}

p+p{
  margin:0;
}

}
`;
const Navs = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  background: black;
  color: white;
  height: 80px;
  .logo {
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 50px; */
    border: 2px solid violet
    ;
    .rail-logo {
      font-size: 30px;
      margin-right: 4px;
    }
    h2 {
      margin: 2px;
      
    }
  }
  .buttons {
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 2px solid violet;
    .btn {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
