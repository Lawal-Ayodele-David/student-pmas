import React from 'react';
import UserList from '../common/UserList';

const ManageUsers: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
      <UserList />
    </div>
  );
};

export default ManageUsers;
