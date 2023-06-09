import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/context/auth.context";
import "./Form.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const { authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      console.log(response.data)
        localStorage.setItem("authToken", response.data.authToken);

      authenticateUser();

      console.log(response.data.authToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

 

  return (
    <>
      <div className="door-wrapper">
        <img className="door" src="/door.png" />

        <form className="login-signup-forms" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />

          <button className="button-forms" onClick={handleSubmit}>
            <img
              src="/button.png"
              alt="Submit"
              style={{ marginLeft: "70px" }}
            />
          </button>

          <div className="form-wrapper">
            <p>Don´t have an account?</p>
            <Link className="login-button-signup" to="/signup">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
