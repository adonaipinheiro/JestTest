import React, { useCallback, useEffect, useState } from 'react';
import { 
  Route as ReactRoute, 
  RouteProps as ReactRouteProps, 
  Redirect 
} from 'react-router-dom';
import LoaderPage from '../components/LoaderPage';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route = ({ isPrivate = false, component: Component, ...props }: RouteProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const timingCount = useCallback(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 3000)
  }, [])

  useEffect(()=>{
    timingCount();
  }, [timingCount])

  return (
    <ReactRoute 
      {...props} 
      render={() => {
        return isLoading ? <LoaderPage /> : true ? <Component /> : <Redirect to={{ pathname:"/" }} /> 
      }}
    />
  );
}

export default Route;