import React, { useState } from 'react';

const SubmitProject: React.FC = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project submitted:', { projectTitle, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Project Title</label>
        <input
          type="text"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit Project</button>
    </form>
  );
};

export default SubmitProject;
