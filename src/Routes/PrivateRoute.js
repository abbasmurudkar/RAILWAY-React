import React, { useContext } from "react";
import { Navigate,} from "react-router-dom";
import { useProfile } from "../Context/ProfileContext";
import { Container, Loader } from "rsuite";

const PrivateRoute = ({ children }) => {
  const {profile,isLoading} = useProfile();
  if(isLoading && !profile){
    return <Container>
        <Loader center speed="slow" content="loading" vertical size="lg"/>
    </Container>
  }
  if (!profile && !isLoading) {
    return <Navigate to={"/SignIn"} replace/>;
  }
  return children
    
 
};

export default PrivateRoute;
