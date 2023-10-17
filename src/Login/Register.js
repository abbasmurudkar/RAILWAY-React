import React, { useState } from 'react'
import { Button, Col, Grid, Input, InputGroup, Panel, Row } from "rsuite";
import styled from 'styled-components'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailIcon from '@mui/icons-material/Mail';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link,useNavigate } from 'react-router-dom';
import { MainContainer } from './Login';
import { auth } from '../misc/Firebase';

const Register = ({Users,OnusernameChange}) => {
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState(" ")
    const [show_hide, setshow_hide] = useState(false)
    const history = useNavigate();
    const OnpasswordChange = (value) => {
      setPassword(value)
    }
    const OnEmailChange = (value) => {
      setEmail(value)
    }
    const Show_Hide = () => {
      setshow_hide(!show_hide)
    }

    const OnRegister = async (e) =>{
      e.preventDefault();
      try{
        await auth.createUserWithEmailAndPassword(Email,Password).then((auth)=>{
          if(auth){
            history('/SignIn')
          }
        })
        alert("REGISTER SUCCESSFULL PROCEED TO LOGIN")
      }
      catch(err){
        alert(err.message)
      }
    }
  return (
    <Registration>
      <Grid style={{width:"100%",height:"100%"}}>
        <Row style={{height:"100%"}} >
          <Col xs={24} md={14} className="columns" style={{height:"100%"}}>
            <div className='main-div'>
              <Panel className='panel' style={{background:"rgb(174, 174, 186,0.4)",borderRadius:"15px"}}>
                <div style={{textAlign:"center"}}>
                  <h2>TrainWhisper REGISTRATION</h2>
                  <p>Register Your Self For Accessing Dashboard</p>
                </div>
                <div style={{margin:"15px 5px 0px 5px"}}>
                  <div className='Input-Group' style={{margin:"3px"}}>
                    <label htmlFor='User-Name'>NAME:</label>
                    <InputGroup >
                      <Input type='text' value={Users} onChange={OnusernameChange} id="User-Name" />
                      <InputGroup.Addon>
                        <PersonOutlineIcon/>
                      </InputGroup.Addon>
                    </InputGroup>
                  </div>
                  <div className='Input-Group'  style={{margin:"3px"}}>
                    <label htmlFor='User-Email'>EMAIL:</label>
                    <InputGroup >
                      <Input type='text' value={Email} onChange={OnEmailChange} id="User-Email" />
                      <InputGroup.Addon>
                        <MailIcon />
                      </InputGroup.Addon>
                    </InputGroup>
                  </div>
                  <div className='Input-Group'  style={{margin:"3px"}}>
                    <label htmlFor='password'>PASSWORD:</label>
                    <InputGroup >
                      <Input type={show_hide ? "text" : "password"} value={Password} onChange={OnpasswordChange} id="password" />
                      <InputGroup.Addon onClick={Show_Hide}>
                        {show_hide?<VisibilityIcon/>:<VisibilityOffIcon/>}
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
                  onClick={OnRegister}
                >Register</Button>
                </div>
                <div >
                  <p style={{textAlign:"center",marginTop:"30px"}}>SignIn With Your Account After Registration?<span style={{color:"blue",cursor:"pointer",fontWeight:"bolder"}}><Link to="/SignIn"> SignIn Now</Link></span></p>
                </div>
              </Panel>
            </div>
          </Col>
        </Row>
      </Grid>
    </Registration >
  )
}

export default Register
const Registration= styled(MainContainer)`
.panel{
  left:0px ;
  position: relative ;
  padding: 30px;
}
`
;
