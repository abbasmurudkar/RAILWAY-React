import React from "react";
import styled from "styled-components";
import Railway from "@mui/icons-material/DirectionsRailway";
import LocationIcon from '@rsuite/icons/Location';
import "rsuite/dist/rsuite.min.css";
import { Button, DateRangePicker, Dropdown, Form, InputGroup, InputNumber } from "rsuite";
import Background from "../../ASSETS/background.jpeg";
import NavbarBrand from "rsuite/esm/Navbar/NavbarBrand";
import { Link } from "react-router-dom";
import subDays from 'date-fns/subDays';
const Navbar = () => {
  const ranges = [
    {
      label: 'today',
      value: [new Date(), new Date()]
    },
    {
      label: 'yesterday',
      value: [subDays(new Date(), 1), subDays(new Date(), 1)]
    }
  ];
  const navigations = [
    {
      Item: "Home",
      Link: "#",
    },
    {
      Item: "About",
      Link: "#",
    },
    {
      Item: "Blog",
      link: "#",
    },
    {
      Item: "Gallery",
      link: "#",
    },
  ];
  return (
    <Continer>
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
                  to={item.link}
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
          <Button size="md" color="green" appearance="primary" className="btn">
            Sign In
          </Button>
          <Button color="green" size="md" appearance="primary" className="btn">
            Register
          </Button>
        </div>
      </Navs>
      <TextContainer>
        <div className="text-part">
          <h1 className="head">
            WELCOME TO
            <br />
            BOOK{" "}
            <span
              style={{ fontWeight: "100", fontSize: "60px", color: "#4caf50" }}
            >
              YOUR
            </span>{" "}
            TRAIN
          </h1>
          <p>
            We save your time both while purchasing,
            <br />
            the check-in and during the travel.
          </p>
        </div>
        <div className="form-part">
          <div className="form">
            <Form>
              <div className="parts">
                <Form.Group controlId="name">
                  <Form.ControlLabel>Travelling Route</Form.ControlLabel>
                  <InputGroup>
                    <Form.Control placeholder="From" name="name" />
                    <InputGroup.Addon>
                    <LocationIcon />
                    </InputGroup.Addon>
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="name">
                  <InputGroup>
                    <Form.Control placeholder="To" name="name" />
                    <InputGroup.Addon>
                    <LocationIcon />
                    </InputGroup.Addon>
                    
                  </InputGroup>
                </Form.Group>
              </div>
              <div className="parts">
                <Form.Group controlId="name">
                  <Form.ControlLabel>Travelling Date</Form.ControlLabel>
                  <DateRangePicker oneTap showOneCalendar placeholder="MM/DD/YY" style={{ width: 200 }} ranges={ranges}/>
                </Form.Group>
                <Form.Group controlId="name">
                  <DateRangePicker oneTap showOneCalendar placeholder="One Way" style={{ width: 200 }} ranges={ranges}/>
                </Form.Group>
              </div>
              <div className="parts">
                <Form.Group controlId="name" >
                  <Form.ControlLabel>Travelling Persons</Form.ControlLabel>
                  <InputNumber max={10} min={1}  placeholder="Adult"/>
                </Form.Group>
                <Form.Group controlId="name">
                  <Form.ControlLabel></Form.ControlLabel>
                  <InputNumber max={10} min={1}  placeholder="Kids"/>
                </Form.Group>
              </div>
              <div className="form-btn" style={{marginTop:"40px",marginLeft:"10px"}}>
                <Button size="md" type="submit" color="red" appearance="primary">Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </TextContainer>
    </Continer>
  );
};

export default Navbar;
const Continer = styled.div`
  background-image: linear-gradient(
      to top,
      rgb(0 0 0 / 52%),
      rgb(126 126 127 / 73%)
    ),
    url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 750px;
  background-attachment: fixed;
`;
const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .text-part {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 70px;
    .head,
    p {
      width: 100%;
      margin-top: 30px;
      letter-spacing: 1.3px;
    }
    .head {
      font-size: 60px;
    }
    p {
      font-size: 20px;
    }
  }
  .form-part {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    .form {
      display: block;
      width: 70%;
      margin-top: 50px;
      height: 450px;
      background: rgba(0,0,0,0.5);
      padding: 30px;
      padding-top: 50px;
      padding-bottom: 60px;
      position: relative;
      .parts{
        display: flex;
        justify-content: space-around;
        align-items: center;
        .rs-input-group {
          width: 200px ;
        }
      }
    }
  }
`;
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
