export const getProjects = async () => {
    // Mock API call
    return [
      { title: 'Project 1', description: 'Description 1' },
      { title: 'Project 2', description: 'Description 2' },
    ];
  };
  
  export const submitProject = async (project: any) => {
    // Mock API call for submitting the project
    return { success: true };
  };
  