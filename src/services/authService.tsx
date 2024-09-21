// export const login = async (email: string, password: string) => {
//     // Perform API request here
//     return { token: 'some-jwt-token' };
//   };
  
//   export const register = async (email: string, password: string) => {
//     // Perform API request here
//     return { success: true };
//   };
  

const authService = {
    login: async (credentials) => {
      // Mock login logic: replace with actual API call
      const { username, password } = credentials;
  
      // Mocked user data
      const users = [
        { username: 'adminUser', password: '1234', role: 'admin' },
        { username: 'supervisorUser', password: '1234', role: 'supervisor' },
        { username: 'studentUser', password: '1234', role: 'student' }
      ];
  
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
  
      if (user) {
        return { data: user };
      } else {
        throw new Error('Invalid credentials');
      }
    }
  };
  
  export default authService;
  