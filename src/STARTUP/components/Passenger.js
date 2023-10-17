import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { Button, DateRangePicker, Form, InputGroup, InputNumber } from "rsuite";
import LocationIcon from "@rsuite/icons/Location";
import subDays from "date-fns/subDays";
import Background from "../../ASSETS/background.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { grey } from "@mui/material/colors";
import Footer from "./Footer";

const Passenger = () => {
  const ranges = [
    {
      label: "today",
      value: [new Date(), new Date()],
    },
    {
      label: "yesterday",
      value: [subDays(new Date(), 1), subDays(new Date(), 1)],
    },
  ];
  return (
    <Blocks>
      <Nav />
      <TextContainer>
        <div className="searching">
          <Form style={{ width: "100%" }}>
            <div className="form">
              <Form.Group controlId="name">
                <Form.ControlLabel style={{ marginBottom: "10px" }}>
                  Travelling Route
                </Form.ControlLabel>
                <InputGroup>
                  <Form.Control placeholder="From" name="name" />
                  <InputGroup.Addon>
                    <LocationIcon />
                  </InputGroup.Addon>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="name" style={{ marginTop: "25px" }}>
                <InputGroup>
                  <Form.Control placeholder="To" name="name" />
                  <InputGroup.Addon>
                    <LocationIcon />
                  </InputGroup.Addon>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="Travelling">
                <Form.ControlLabel>Travelling Date</Form.ControlLabel>
                <DateRangePicker
                  name="Travelling"
                  oneTap
                  showOneCalendar
                  placeholder="MM/DD/YY"
                  style={{ width: 170, margin: "10px" }}
                  ranges={ranges}
                />
              </Form.Group>
              <Form.Group controlId="name" style={{ marginTop: "25px" }}>
                <DateRangePicker
                  oneTap
                  showOneCalendar
                  placeholder="One Way"
                  style={{ width: "170px", margin: "10px" }}
                  ranges={ranges}
                />
              </Form.Group>
              <Form.Group controlId="name">
                <Form.ControlLabel>Travelling Persons</Form.ControlLabel>
                <InputNumber max={10} min={1} placeholder="Adult" />
              </Form.Group>
              <Form.Group controlId="name" style={{ marginTop: "25px" }}>
                <Form.ControlLabel></Form.ControlLabel>
                <InputNumber max={10} min={1} placeholder="Kids" />
              </Form.Group>
            </div>
          </Form>
          <div className="btn">
            <Button color="red" appearance="primary" type="submit" size="lg">
              Search Ticket
            </Button>
          </div>
        </div>
      </TextContainer>
      <Navigations>
        <h3>Tickets</h3>
        <h3>Passengers</h3>
      </Navigations>
      <RoutingPart>
        <div className="box1">
          <div className="sub-box1">
            <h2>Summary</h2>
          </div>
          <div className="sub-box2">
            <ArrowForwardIcon />
            <h4>There</h4>
          </div>
          <div className="sub-box3">
            <div className="boxes1">
              <div
                className="b"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "20px",
                }}
              >
                <p style={{ color: "grey" }}>Train</p>
                <p>048A</p>
              </div>
              <div
                className="b2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "grey" }}>Name</p>
                <p>Eastern Express</p>
              </div>
            </div>

            <div
              className="boxes2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <div className="section1" style={{ width: "40%" }}>
                <h5>8:30am</h5>
                <p style={{ color: "grey" }}>Feb 12 SUN</p>
              </div>
              <div
                className="section2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <p>8:30am</p>
                <ArrowForwardIcon />
              </div>
              <div className="section3" style={{ width: "40%" }}>
                <h5 style={{ textAlign: "right" }}>8:30am</h5>
                <p style={{ color: "grey", textAlign: "right" }}>Feb 12 SUN</p>
              </div>
            </div>
            <div
              className="boxes2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <div className="section1" style={{ width: "40%" }}>
                <h5>Delhi</h5>
                <p style={{ color: "grey" }}>New Delhi Station</p>
                <p style={{ color: "grey" }}>Maharashtra</p>
              </div>
            
              <div className="section3" style={{ width: "40%" }}>
                <h5 style={{ textAlign: "right" }}>Jammu Tawai</h5>
                <p style={{ color: "grey", textAlign: "right" }}>Tawai Station<br/></p>
                <p style={{ color: "grey",textAlign:"right" }}>Kashmir</p>
              </div>
            </div>
          </div>
          <div className="sub-box2"style={{borderTop:"1px solid grey",marginTop:"15px"}}>
            <ArrowBackIcon />
            <h4>Back</h4>
          </div>
          <div className="sub-box3">
            <div className="boxes1">
              <div
                className="b"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "20px",
                }}
              >
                <p style={{ color: "grey" }}>Train</p>
                <p>048A</p>
              </div>
              <div
                className="b2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "grey" }}>Name</p>
                <p>Eastern Express</p>
              </div>
            </div>

            <div
              className="boxes2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <div className="section1" style={{ width: "40%" }}>
                <h5>8:30am</h5>
                <p style={{ color: "grey" }}>Feb 12 SUN</p>
              </div>
              <div
                className="section2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <p>8:30am</p>
                <ArrowBackIcon />
              </div>
              <div className="section3" style={{ width: "40%" }}>
                <h5 style={{ textAlign: "right" }}>8:30am</h5>
                <p style={{ color: "grey", textAlign: "right" }}>Feb 12 SUN</p>
              </div>
            </div>
            <div
              className="boxes2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <div className="section1" style={{ width: "40%" }}>
                <h5>Delhi</h5>
                <p style={{ color: "grey" }}>New Delhi Station</p>
                <p style={{ color: "grey" }}>Maharashtra</p>
              </div>

              <div className="section3" style={{ width: "40%" }}>
                <h5 style={{ textAlign: "right" }}>Jammu Tawai</h5>
                <p style={{ color: "grey", textAlign: "right" }}>Tawai Station<br/></p>
                <p style={{ color: "grey",textAlign:"right" }}>Kashmir</p>
              </div>
            </div>
          </div>
          <div className="sub-box4" style={{borderTop:"1px solid grey",marginTop:"10px",padding:"10px",display:"flex",justifyContent:"space-between"}}>
            <h4>Total</h4>
            <p style={{fontSize:"26px"}}>₹<span style={{fontSize:"25px",color:"orangered"}}>1200</span></p>
          </div>
        </div>
        <div className="box2">
             
        </div>
      </RoutingPart>
      <Footer/>
    </Blocks>
  );
};

export default Passenger;
const Navigations = styled.div`
  border: 2px solid red;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  :nth-child(1) {
    background-color: black;
    color: white;
  }
  :nth-child(2) {
    background-color: #ef3c09;
    color: white;
    border-radius: 0px 100px 100px 5px;
  }
  h3 {
    border: 2px solid red;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 100%;
  }
`;
const Blocks = styled.div`
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
  height: 450px;
  background-attachment: fixed;
`;
const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .searching {
    width: 90%;
    height: 200px;
    margin-top: 250px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
    .form {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      color: white;
      .rs-input-group {
        width: 170px;
        margin: 10px;
      }
      .rs-form-group {
        margin: 0;
      }
    }
  }
`;
const RoutingPart = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 2px solid red;
  .box1 {
    width: 30%;
    height: 850px;
    border-radius: 10px;
    color: white;
    background: #27282f;
    padding: 15px;
    border: 2px solid green;
    .sub-box1 {
      height: 100px;
      border-bottom: 1px solid white;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sub-box2 {
      display: flex;
      align-items: center;
      padding-top: 30px;
      h4 {
        margin-left: 30px;
      }
    }
    .sub-box3 {
      display: flex;
      flex-direction: column;
      /* border: 2px solid white; */
    }
  }
  .box2 {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 2px solid blue;
  }
`;
