import "./login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <hr></hr>
      <form>
   
        <input type="text" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
        <button className="login-btn">Sign In</button>
      </form>
      <p className="sign-up-link">
        Not a member? <NavLink to="/register">Sign up, </NavLink>
        it's free.
      </p>
    </div>
  );
};

export default Login;
