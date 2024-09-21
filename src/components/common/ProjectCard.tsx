import React from 'react';

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <div className="bg-white p-4 shadow">
      <h3 className="text-xl">{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
