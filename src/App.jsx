import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/Auth/PrivateRoute';
import StudentDashboard from './components/Student/StudentDashboard';
import SupervisorDashboard from './components/Supervisor/SupervisorDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Private routes */}
          <Route
            path="/student/dashboard"
            element={<PrivateRoute element={<StudentDashboard />} role="student" />}
          />
          <Route
            path="/supervisor/dashboard"
            element={<PrivateRoute element={<SupervisorDashboard />} role="supervisor" />}
          />
          <Route
            path="/admin/dashboard"
            element={<PrivateRoute element={<AdminDashboard />} role="admin" />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
