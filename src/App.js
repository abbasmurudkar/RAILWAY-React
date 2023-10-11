import './App.css';
import { Route,Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './STARTUP/Navbar';
function App() {
  return (
    <View>
    <Navbar/>

    </View>
  );
}

export default App;

const  View = styled.div`
width: 100%;
height: 100%;
`;