# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1. Project Structre..

- front end react:

student-project-management/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Admin/
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── ManageProjects.tsx
│   │   │   └── ManageUsers.tsx
│   │   ├── Student/
│   │   │   ├── StudentDashboard.tsx
│   │   │   ├── SubmitProject.tsx
│   │   │   └── ViewProjects.tsx
│   │   ├── Supervisor/
│   │   │   ├── SupervisorDashboard.tsx
│   │   │   ├── AllocateProjects.tsx
│   │   │   └── ReviewProject.tsx
│   │   ├── Auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── RoleBasedRoute.tsx
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── common/
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectList.tsx
│   │       └── UserList.tsx
│   ├── services/
│   │   ├── authService.tsx
│   │   ├── projectService.tsx
│   │   └── userService.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── App.css
├── .env
├── package.json
└── README.md

- Backend (Node.js & Express):

backend/
├── config/
│   ├── db.js          # MongoDB connection configuration
├── controllers/
│   ├── authController.js   # Authentication logic
│   ├── projectController.js # Project CRUD operations
│   ├── userController.js   # User (student/supervisor) management
├── models/
│   ├── Project.js      # Project schema (MongoDB)
│   ├── User.js         # User schema (MongoDB, with roles: Student, Supervisor, Admin)
├── routes/
│   ├── authRoutes.js   # Authentication routes
│   ├── projectRoutes.js # Project management routes
│   ├── userRoutes.js   # User management routes
├── middleware/
│   ├── authMiddleware.js # JWT authentication
├── server.js           # Main entry point
├── package.json
├── .env
└── README.md


2. Frontend (React.js)

- Main Components:
a. Authentication (Login.js, Register.js).
b. Implements user login and registration with role-based access control using JWT.
c. After successful login, users are redirected to their respective dashboards based on their role.

- Student Components:
a StudentDashboard.js: Displays the student's submitted projects and their statuses.
b. SubmitProject.js: A form for students to submit new projects.
c. ViewProjects.js: Students can view their project details, including feedback from the supervisor.

- Supervisor Components:
a. SupervisorDashboard.js: Displays assigned students' projects.
b. AllocateProjects.js: Allows the supervisor to assign or approve projects.
c. ReviewProject.js: Supervisors can review and provide feedback on submitted projects.

- Admin Components:
a AdminDashboard.js: Admin control panel for managing students, supervisors, and projects.
b. ManageProjects.js: Allows the admin to view all projects in the system.
c. ManageUsers.js: Admin can manage user roles and register new users.


3. Deployment

- Frontend: Deploy using Netlify or Vercel for easy React deployment.
- Backend: Deploy on Heroku or AWS for Node.js and MongoDB hosting.
- Database: Use MongoDB Atlas for cloud-based MongoDB deployment.


- Sumarisation: 

This structure outlines a comprehensive Student Project Management and Allocation System with clear separation of concerns across the frontend, backend