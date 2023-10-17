import React from 'react'
import { Navigate } from 'react-router-dom';
import { useProfile } from '../Context/ProfileContext';
import { Container, Loader } from 'rsuite';

const PublicRoute = ({children}) => {
    const {profile,isLoading} = useProfile();
  if(isLoading && !profile){
    return <Container>
        <Loader center speed="slow" content="Loading" vertical size="lg"/>
    </Container>
  }
    if (profile && !isLoading) {
      return <Navigate to={"/Dashboard"} replace/>;
    }
  return children
}
export default PublicRoute
