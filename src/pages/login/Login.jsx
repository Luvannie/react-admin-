import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss"
const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs)
    navigate("/customer");


  };
  return (
    <div className="auth">
      <div className="content">
        <h1>Login</h1>
        <div className="login-form">
          <form>
            <h6>User name</h6>
            <input
              required
              type="text"
              placeholder="Enter your User name"
              name="username"
              onChange={handleChange}
            />
            <h6>Password</h6>
            <input
              required
              type="password"
              placeholder="Enter your Password"
              name="password"
              onChange={handleChange}
            />
            <a href="/">Forgot password</a>
            <button onClick={handleSubmit}>Login</button>
            {err && <p>{err}</p>}
            <span>
              Don't you have an account? <Link to="/register">Register</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
