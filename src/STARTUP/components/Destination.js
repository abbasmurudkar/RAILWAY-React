import React from "react";
import { Button } from "rsuite";
import styled from "styled-components";
import tajmahal from "../../ASSETS/taj-mahal.webp";
import Redfort from "../../ASSETS/Redfort.webp"
import BaghaBeach from "../../ASSETS/Baghabeach.jpeg"
import Ladhak from "../../ASSETS/ladhak.jpeg"
import Manali from "../../ASSETS/manali.jpeg"
import udaipur from "../../ASSETS/udaipur.jpeg"
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Destination = () => {
  const tourist1 = [
    {
      Img: tajmahal,
      Location: "AGRA",
      RailwayStation: "Agra Fort Railway Station",
      Country: "India",
      LocatedIn: "Uttar Pradesh",
      Rupees: "700"
    },
    
    {
      Img: Redfort,
      Location: "REDFORT",
      RailwayStation: "Delhi Chandni Chowk",
      Country: "India",
      LocatedIn: "Delhi",
      Rupees: "1200"

    },
    {
        Img: BaghaBeach,
        Location: "BAGHA BEACH",
        RailwayStation: "Margao Railway",
        Country: "India",
        LocatedIn: "Goa",
        Rupees: "1200"
  
      }
  ];
  const tourist2 = [
    {
      Img: Ladhak,
      Location: "JAMMU KASHMIR",
      RailwayStation: "Jammu Tawai",
      Country: "India",
      LocatedIn: "Kashmir state",
      Rupees: "700"
    },
    {
      Img: Manali,
      Location: "MANALI",
      RailwayStation: " Ambala Cantt",
      Country: "India",
      LocatedIn: "Kullu District",
      Rupees: "1200"

    },
    {
        Img: udaipur,
        Location: "UDAIPUR",
        RailwayStation: "Udaipur Station",
        Country: "India",
        LocatedIn: "Rajastan",
        Rupees: "1200"
  
      }
  ];
  return (
    <Container>
      <div className="container-1">
        <h3>TOP TRAVEL DESTINATIONS</h3>
        <Button color="green" appearance="ghost">
          Explore Now
        </Button>
      </div>
      <div className="container-1" style={{marginBottom:"70px"}}>
        {tourist1.map((item, key) => {
          return (
            <div className="content-1" key={key}>
              <img src={item.Img} alt="loading" />
              <div className="textual-content">
                <div className="text-1">
                  <h4>{item.Location}</h4>
                  <p>{item.RailwayStation}</p>
                </div>
                <div className="text-1" style={{ textAlign: "right" }}>
                  <h4>{item.Country}</h4>
                  <p>{item.LocatedIn}</p>
                </div>
              </div>
              <hr />
              <div
                className="textual-content"
                style={{ border: "none", paddingBottom: "20px" }}
              >
                <div className="text-1">
                  <p style={{ position: "relative", top: "8px" }}>Every Day</p>
                </div>
                <div className="text-1" style={{ textAlign: "right" }}>
                  <p>
                    From
                    <span style={{ fontSize: "25px", color: "red" }}>
                      <CurrencyRupeeIcon
                        style={{ position: "relative", top: "4px" }}
                      />
                      {item.Rupees}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container-1">
        {tourist2.map((item, key) => {
          return (
            <div className="content-1" key={key}>
              <img src={item.Img} alt="loading" />
              <div className="textual-content">
                <div className="text-1">
                  <h4>{item.Location}</h4>
                  <p>{item.RailwayStation}</p>
                </div>
                <div className="text-1" style={{ textAlign: "right" }}>
                  <h4>{item.Country}</h4>
                  <p>{item.LocatedIn}</p>
                </div>
              </div>
              <hr />
              <div
                className="textual-content"
                style={{ border: "none", paddingBottom: "20px" }}
              >
                <div className="text-1">
                  <p style={{ position: "relative", top: "8px" }}>Every Day</p>
                </div>
                <div className="text-1" style={{ textAlign: "right" }}>
                  <p>
                    From
                    <span style={{ fontSize: "25px", color: "red" }}>
                      <CurrencyRupeeIcon
                        style={{ position: "relative", top: "4px" }}
                      />
                      {item.Rupees}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Destination;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 70px 0px 70px;
  .container-1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
    .content-1 {
      cursor: pointer;
      width: 350px;
      height: 800px;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-shadow: 12px 10px 25px grey;
      border-radius: 10px;

      hr {
        width: 90%;
        margin-left: 20px;
        border: 0.4px solid grey;
        margin: 10px;
      }
      img {
        width: 100%;
        height: 250px;
        transition: 0.3s all ease-in-out;
      }
      .textual-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* border-bottom: 1px solid grey; */
        border-width: thin;
        padding: 0px 10px 0px 10px;

        .text-1 {
          h4 {
            padding-top: 5px;
            font-weight: bolder;
          }
          p {
            color: grey;
          }
        }
      }
    }
  }
`;
