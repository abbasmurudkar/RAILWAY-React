import React from "react";
import styled from "styled-components";

import LocationIcon from '@rsuite/icons/Location';
import "rsuite/dist/rsuite.min.css";
import { Button, DateRangePicker, Dropdown, Form, InputGroup, InputNumber } from "rsuite";
import Background from "../../ASSETS/background.jpeg";
import subDays from 'date-fns/subDays';
import Nav from "./Nav";
const Navbar = (props) => {
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
 
  return (
    <Continer>
      <Nav/>
      <TextContainer>
        <div className="text-part">
          <h1 className="head">
            WELCOME TO
            <br />
            BOOK{" "}
            <span style={{  fontSize: "60px"}}>YOUR</span>{" "}
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
