import React from 'react';

const UserList: React.FC = () => {
  const users = [{ name: 'John Doe', role: 'Student' }, { name: 'Jane Smith', role: 'Admin' }];

  return (
    <div>
      {users.map((user) => (
        <div key={user.name}>
          {user.name} - {user.role}
        </div>
      ))}
    </div>
  );
};

export default UserList;
