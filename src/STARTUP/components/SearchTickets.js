import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Background from "../../ASSETS/background.jpeg";
import Railwaylogo1 from "../../ASSETS/Rail-logo1.png";
import logos from "../../ASSETS/rail-logos.png";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  Button,
  DateRangePicker,
  Form,
  InputGroup,
  InputNumber,
  Slider,
  Toggle,
} from "rsuite";
import LocationIcon from "@rsuite/icons/Location";
import subDays from "date-fns/subDays";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const data = [
  {
    time: "7:30pm",
    date: "Feb 14 SUN",
    City: "Delhi",
    Station: "New Delhi Station",
    DestinationTime: "8:30pm",
    City2: "Jammu Tawai",
    Station2: "Jammu Tawai Station",
    price:"1200",
    TrainNo:"480A",
    Express:"Eatern Express"
  },
  {
    time: "7:30pm",
    date: "Feb 14 SUN",
    City: "Delhi",
    Station: "New Delhi Station",
    DestinationTime: "8:30pm",
    City2: "Jammu Tawai",
    Station2: "Jammu Tawai Station",
    price:"1200",
    TrainNo:"480A",
    Express:"Eatern Express"
  },
  {
    time: "7:30pm",
    date: "Feb 14 SUN",
    City: "Delhi",
    Station: "New Delhi Station",
    DestinationTime: "8:30pm",
    City2: "Jammu Tawai",
    Station2: "Jammu Tawai Station",
    price:"1200",
    TrainNo:"480A",
    Express:"Eatern Express"
  },
  {
    time: "7:30pm",
    date: "Feb 14 SUN",
    City: "Delhi",
    Station: "New Delhi Station",
    DestinationTime: "8:30pm",
    City2: "Jammu Tawai",
    Station2: "Jammu Tawai Station",
    price:"1200",
    TrainNo:"480A",
    Express:"Eatern Express"
  },
];
const SearchTickets = () => {
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
            <h2>Filter by</h2>
          </div>
          <div className="sub-box2">
            <div className="text">
              <h3>Coach Type</h3>
            </div>
            <dic className="Toggle">
              <Form.ControlLabel>
                <Toggle size="md" />
                <span> Third Class Sleeping</span>
              </Form.ControlLabel>
              <Form.ControlLabel>
                <Toggle size="md" />
                <span> Second Class Sleeping</span>
              </Form.ControlLabel>
              <Form.ControlLabel>
                <Toggle size="md" />
                <span> First Class Sleeping</span>
              </Form.ControlLabel>
              <Form.ControlLabel>
                <Toggle size="md" />
                <span> Comfortable</span>
              </Form.ControlLabel>
              <Form.ControlLabel>
                <Toggle size="md" />
                <span> Third Class Non-Reserved</span>
              </Form.ControlLabel>
              <Form.ControlLabel>
                <Toggle size="md" />
                <span> Sedentary Carriages</span>
              </Form.ControlLabel>
              <Form.ControlLabel>
                <Toggle size="md" />
                <span> Sedentary Carriages</span>
              </Form.ControlLabel>
            </dic>
          </div>
          <div className="sub-box3">
            <h3>Departure/Arrive time</h3>
            <Slider
              style={{ width: "350px", marginLeft: "20px" }}
              defaultValue={50}
              min={0}
              step={12}
              max={24}
              graduated
              progress
              renderMark={(mark) => {
                return <span>{mark}:00</span>;
              }}
            />
          </div>
          <div className="sub-box3">
            <h3>Price</h3>
            <Slider
              style={{ width: "350px", marginLeft: "20px" }}
              defaultValue={50}
              min={300}
              step={100}
              max={1000}
              graduated
              progress
              renderMark={(mark) => {
                return <span>{mark}₹</span>;
              }}
            />
          </div>
        </div>
        <div className="box2">
          {data.map((item, key) => {
            return (
              <div className="sub2-box1">
                <div className="section1">
                  <img src={Railwaylogo1} alt="loading" />
                  <div className="text">
                    <p>{item.TrainNo}</p>
                    <p>{item.Express}</p>
                  </div>
                </div>
                <div className="section2">
                  <div className="travel">
                    <div className="boxes1">
                      <h3>{item.time}</h3>
                      <p>{item.date}</p>
                      <h5>{item.City}</h5>
                      <p>{item.Station}</p>
                    </div>
                    <div className="boxes2">
                      <p>7:25pm</p>
                      <KeyboardTabIcon />
                    </div>
                    <div className="boxes3">
                      <h3>{item.DestinationTime}</h3>
                      <p>{item.date}</p>
                      <h5>{item.City2}</h5>
                      <p>{item.Station2}</p>
                    </div>
                  </div>
                  <div className="travel">
                    <div className="boxes1">
                    <h3>{item.time}</h3>
                      <p>{item.date}</p>
                      <h5>{item.City}</h5>
                      <p>{item.Station}</p>
                    </div>
                    <div className="boxes2">
                      <p>7:25pm</p>
                      <KeyboardBackspaceIcon />
                    </div>
                    <div className="boxes3">
                    <h3>{item.DestinationTime}</h3>
                      <p>{item.date}</p>
                      <h5>{item.City2}</h5>
                      <p>{item.Station2}</p>
                    </div>
                  </div>
                </div>
                <div className="section3">
                  <h2>
                    ₹<span>{item.price}</span>
                  </h2>
                  <span>/person</span>
                  

                  <img src={logos} alt="loading" />
                  <Link to="/Passengers"><Button style={{marginTop:"20px"}}size="sm" color="red" appearance="primary" >Book Now</Button></Link>
                </div>
              </div>
            );
          })}
        </div>
      </RoutingPart>
      <Footer/>
    </Blocks>
  );
};

export default SearchTickets;

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
const Navigations = styled.div`
  border: 2px solid red;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ef3c09;
  :nth-child(1) {
    background-color: #ef3c09;
    color: white;
    border-radius: 0px 100px 100px 5px;
  }
  :nth-child(2) {
    background-color: black;
    color: white;
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
const RoutingPart = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .box1 {
    width: 30%;
    height: 850px;
    border-radius: 10px;
    color: white;
    background: #27282f;
    padding: 15px;
    .sub-box1 {
      height: 100px;
      border-bottom: 1px solid white;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sub-box2 {
      width: 100%;
      .text {
        display: block;
        padding: 10px;
        margin-top: 20px;
      }
      .Toggle {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        span {
          font-size: 20px;
          margin-left: 30px;
        }
        .rs-form-control-label {
          margin-bottom: 20px;
        }
      }
    }
    .sub-box3 {
      display: flex;
      width: 100%;
      flex-direction: column;
      h3 {
        padding: 10px;
        margin-top: 20px;
      }
    }
  }
  .box2 {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    :hover .sub2-box1 {
        transform: scale(1.2);
     }
    .sub2-box1 {
      border: 1px solid grey;
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: row;
      margin-bottom: 15px;
      box-shadow: 1px 10px 9px grey;
      transition: 03s all ease-in-out;
      cursor: pointer;
     
      .section2 {
        border-left: 1px solid grey;
        border-right: 1px solid grey;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .travel {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 8px;
          .boxes2 {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
        }
      }
      .section1 {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 120px;
        }
        .text {
          p {
            text-align: center;
            color: grey;
            font-weight: 600;
          }
        }
      }

      .section3 {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          margin-top: 10px;
          width: 150px;
        }
        h2 {
          span {
            color: #ef3c09;
            font-size: 30px;
          }
        }
      }
    }
  }
`;
