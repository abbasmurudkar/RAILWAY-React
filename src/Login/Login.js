import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Grid, Input, InputGroup, Panel, Row } from "rsuite";
import styled from "styled-components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import LoginBackground from "../ASSETS/loginbackground.jpeg"
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [show_hide, setshow_hide] = useState(false);

  const OnuserChange = (value) => {
    setEmail(value);
  };
  const OnpasswordChange = (value) => {
    setPassword(value);
  };
  const Show_Hide = () => {
    setshow_hide(!show_hide);
  };
  return (
    <MainContainer>
      <Grid >
        <Row>
          <Col xs={24} md={14} className="columns">
            <Panel className="panel" style={{background:"rgb(174, 174, 186,0.4)",borderRadius:"15px"}}>
              <div style={{textAlign:"center"}}>
                <h2>Welcome To TrainWhisper</h2>
                <p>We Make Easier, Efficient  Trip to  travel</p>
              </div>
              <div style={{margin:"15px 5px 0px 5px"}}>
                <div className="Input-Group" style={{margin:"3px"}}>
                  <label htmlFor="user">USERNAME:</label>
                  <InputGroup>
                    <Input
                      type="text"
                      value={Email}
                      onChange={OnuserChange}
                      id="user"
                    />
                    <InputGroup.Addon>
                      <PersonOutlineIcon />
                    </InputGroup.Addon>
                  </InputGroup>
                </div>
                <div className="Input-Group" style={{margin:"3px"}}>
                  <label htmlFor="password">PASSWORD:</label>
                  <InputGroup>
                    <Input
                      type={show_hide ? "text" : "password"}
                      value={Password}
                      onChange={OnpasswordChange}
                      id="password"
                    />
                    <InputGroup.Addon onClick={Show_Hide}>
                      {show_hide ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </InputGroup.Addon>
                  </InputGroup>
                </div>
                <Button
                  style={{
                    width: "25%",
                    margin:"20px 5px 0px 5px"
                  }}
                  type="submit"
                  size="lg"
                  color="green"
                  appearance="primary"
                >
                  Submit
                </Button>
                <p className="sign-with">Sign up with</p>
              </div>
              <div style={{margin:"3px"}}>
                <Button block type="submit" size="lg" color="blue" appearance="primary" required>
                  <FacebookIcon style={{position:"absolute",left:"15px"}}/> Login with Facebook
                </Button>
                <Button className="google" block type="submit" size="lg" color="red" appearance="primary">
                  <GoogleIcon style={{position:"absolute",left:"15px"}} /> Login with Google
                </Button>
                <Button className="github" block size="lg" type="submit" >
                  <GitHubIcon style={{position:"absolute",left:"15px"}} /> Login with Github
                </Button>
                <p style={{textAlign:"center",marginTop:"30px"}}>
                  Create Your BROOZ Account Now?
                  <span style={{color:"blue",cursor:"pointer",fontWeight:"bolder"}}>
                    <Link to="/Register"> Register Now</Link>
                  </span>
                </p>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </MainContainer>
  );
};

export default Login;
export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to top,
      rgb(0 0 0 / 52%),
      rgb(126 126 127 / 73%)
    ),
    url(${LoginBackground});
  /* background-position: center; */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
  .columns {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  button{
    margin: 15px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rs-panel-body {
    padding: 0;
  }
  .panel {
    width: 500px;
    padding: 30px;
  }
 
  .sign-with {
    margin-top: 20px;
    margin-left: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    font-weight: 540;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .sign-with::before {
    content: "";
    display: inline-block;
    height: 3px;
    width: 27%;
    background-color: white;
    position: relative;
    vertical-align: middle;
    left: -50px;
  }
  .sign-with::after {
    content: "";
    display: inline-block;
    height: 3px;
    width: 27%;
    background-color: white;
    vertical-align: middle;
    position: relative;
    left: 4dvi;
  }
`;
