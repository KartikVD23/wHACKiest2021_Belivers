import "./App.css";
import Navbar from "./components/navbar.component.js";
import AdminLogin from "./components/admin_login.component.js";
import AdminDashBoard from "./components/admin.dashboard.component";
import MemberSignUp from "./components/member.signup.component.js";
import MemberLogin from "./components/member.login.component.js";
import MemberDashboard from "./components/member-dashboard.component.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={AdminLogin} />
      <Route path="/admin-login" exact component={AdminLogin} />
      <Route path="/admin-dashboard" exact component={AdminDashBoard} />
      <Route path="/member-signup" exact component={MemberSignUp} />
      <Route path="/member-login" exact component={MemberLogin} />
      <Route path="/member-dashboard" exact component={MemberDashboard} />
    </Router>
  );
}

export default App;
