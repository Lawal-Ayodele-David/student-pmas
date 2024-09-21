import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList: React.FC = () => {
  const projects = [{ title: 'Project 1', description: 'Description 1' }, { title: 'Project 2', description: 'Description 2' }];

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
