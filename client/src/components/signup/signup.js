import "../login/login.css";
// import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <hr></hr>
      <form>
        <input type="text" id="name" placeholder="Full name" />
        <input type="text" id="email" placeholder="Email" />
        <input
          type="password"
          id="password"
          placeholder="
        Password"
        />
        <input type="password" id="confirm-password" placeholder="Confirm password" />
        <button className="login-btn">Create new account</button>
      </form>
    </div>
  );
};

export default Signup;
