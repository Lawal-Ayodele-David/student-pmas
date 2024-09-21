import React from 'react';
import ManageProjects from './ManageProjects';
import ManageUsers from './ManageUsers';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <ManageProjects />
      <ManageUsers />
    </div>
  );
};

export default AdminDashboard;
