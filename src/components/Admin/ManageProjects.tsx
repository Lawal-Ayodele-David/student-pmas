import React from 'react';
import ProjectList from '../common/ProjectList';

const ManageProjects: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Projects</h2>
      <ProjectList />
    </div>
  );
};

export default ManageProjects;
