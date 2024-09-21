import React from 'react';
import SubmitProject from './SubmitProject';
import ViewProjects from './ViewProjects';

const StudentDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Student Dashboard</h1>
      <SubmitProject />
      <ViewProjects />
    </div>
  );
};

export default StudentDashboard;
