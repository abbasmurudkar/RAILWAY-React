import React, { useRef } from 'react'
import styled from 'styled-components';
import Railway from "@mui/icons-material/DirectionsRailway";
import { Link } from "react-router-dom";
import { Button } from 'rsuite';
const Nav = () => {
    
    const navigations = [
        {
          Item: "Home",
          Link: "/",
        },
        {
          Item: "About",
          Link: "/About",
        },
        {
          Item: "Blog",
          Link: "/Blog",
        },
        {
          Item: "Gallery",
          Link: "#",
        },
      ];
  return (
    <Navs>
    <div className="logo">
      <Railway className="rail-logo" />
      <h4>TrainWhisper</h4>
    </div>
    <NavigationLinks>
      <div className="links">
        {navigations.map((item, key) => {
          return (
            <Link
              to={item.Link}
              key={key}
              style={{ color: "white", textDecoration: "none" }}
            >
              <p>{item.Item}</p>
            </Link>
          );
        })}
      </div>
    </NavigationLinks>
    <div className="buttons">
      <Link to="/SignIn"><Button size="md" color="green" appearance="primary" className="btn">
        Sign In
      </Button></Link>
      <Link to="/Register"><Button color="green" size="md" appearance="primary" className="btn">
        Register
      </Button></Link>
    </div>
  </Navs>
  )
}

export default Nav

const NavigationLinks = styled.div`
  .links {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    p {
      margin-right: 50px;
      font-size: 18px;
      margin-left: 50px;
    }
    p + p {
      margin: 0;
    }
  }
`;
const Navs = styled.div`
  width: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
  height: 80px;
  .logo {
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    .btn {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

