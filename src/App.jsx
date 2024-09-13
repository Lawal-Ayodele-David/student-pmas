import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/student/dashboard" component={StudentDashboard} role="student" />
          <PrivateRoute path="/supervisor/dashboard" component={SupervisorDashboard} role="supervisor" />
          <PrivateRoute path="/admin/dashboard" component={AdminDashboard} role="admin" />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
