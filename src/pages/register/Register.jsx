import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss"
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
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
    // try {
    //   await axios.post("/", inputs);
    //   navigate("/login");
    // } catch (err) {
    //   setError(err.response.data);
    // }
  };

  return (
    <div className="auth">
      <div className="content">
        <h1>Register</h1>
        <div className="login-form">
          <form>
            <h6>User name</h6>

            <input
              required
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <h6>Email</h6>

            <input
              required
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <h6>Password</h6>

            <input
              required
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Register</button>
            {err && <p>{err}</p>}
            <span>
              Do you have an account? <Link to="/login">Login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
