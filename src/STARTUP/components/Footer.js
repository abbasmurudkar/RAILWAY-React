import React from "react";
import styled from "styled-components";
import Railway from "@mui/icons-material/DirectionsRailway";
import { Google,Facebook } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <Footers>
      <div className="footer-logo">
        <Railway className="rail-logo" />
        <h4>TrainWhisper</h4>
      </div>
      <div className="footer-text">
        <p>
          Thank you for choosing our railway reservation service. We are
          dedicated to providing a seamless and efficient booking experience for
          your train journeys. <br/>Our commitment is to connect you to your
          destination with ease and convenience. Your trust in our platform<br/>
          drives us to continually improve and offer you the best travel
          solutions.<br/> We look forward to being a part of your travel adventures,<br/>
          making every journey a memorable one.
        </p>
      </div>
      <div className="logos">
        <div className="lg-1">
        <Google/>
        </div>
        <div className="lg-1">
        <Facebook/>
        </div>
        <div className="lg-1">
        <GitHubIcon/>
        </div>

      </div>
    </Footers>
  );
};

export default Footer;

const Footers = styled.div`
  width: 100%;
  background: black;
  color: white;
  .footer-logo {
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    .rail-logo {
      font-size: 30px;
      margin-right: 4px;
    }
    h2 {
      margin: 2px;
    }
  }
  .footer-text{
    width: 100%;
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 2px solid white;
  }
  .logos{
    display: flex;
    justify-content: center;
    align-items: center;
    .lg-1{
        margin: 10px;
        border: 2px solid white;
        width: 50px;
        text-align: center;
        border-radius: 50%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

  }
`;
