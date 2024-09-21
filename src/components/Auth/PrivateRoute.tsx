import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactElement;
  role: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component, role }) => {
  const navigate = useNavigate();

  const isAuthenticated = true; // Replace with actual authentication logic
  const userRole = 'student';   // Replace with actual logic to get user's role

  useEffect(() => {
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      navigate('/login');
    }

    // If authenticated but doesn't have the right role, redirect to unauthorized page
    if (isAuthenticated && role !== userRole) {
      navigate('/unauthorized'); // Optional: use this route for unauthorized access
    }
  }, [isAuthenticated, role, userRole, navigate]);

  // Return null if navigation logic is in progress to prevent rendering
  if (!isAuthenticated || role !== userRole) {
    return null;
  }

  // Return the protected component if authenticated and role matches
  return Component;
};

export default PrivateRoute;
