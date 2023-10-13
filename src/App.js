import "./App.css";
import { Router, Route, Link, Routes} from "react-router-dom";
import styled from "styled-components";
import Startup from "./STARTUP/Startup";
function App() {
  return (
    <View>
      <Routes>
        <Route  path="/" element={<Startup/>} />

      </Routes>
    </View>
    
  );
}

export default App;

const View = styled.div`
  width: 100%;
  height: 100%;
`;
