import "./App.css";
// import { Router, Route, Link, Routes} from "react-router-dom";

import styled from "styled-components";
import Startup from "./STARTUP/Startup";
import BLOG from "./STARTUP/BLOG";
import Aboutus from "./STARTUP/Aboutus";
import Error from "./Error";
import Login from "./Login/Login";
import Register from "./Login/Register";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./Routes/PublicRoute";

function App() {
  
  return (
    <View>
      <Routes>
        <Route path="/" element={<Startup/>}/>
        <Route  path="/About" element={<Aboutus/>}/>
        <Route  path="/Blog" element={<BLOG/>}/>
        <Route path="*" element={<Error/>} />
        <Route path="/SignIn" element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
      </Routes>
    </View>
    
  );
}

export default App;

const View = styled.div`
  width: 100%;
  height: 100%;
`;
