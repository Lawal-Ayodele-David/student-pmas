import React from 'react';
import {Route, Navigate } from 'react-router-dom';

const RoleBasedRoute = ({ component: Component, role, ...rest }: any) => {
  // Here, logic should be added to check the role from context or auth state.
  const userRole = 'admin'; // For example, coming from auth context

  return (
    <Route
      {...rest}
      render={(props) =>
        userRole === role ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default RoleBasedRoute;
