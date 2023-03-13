import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD:pages/Signup.jsx
import "./Form.css";

=======
import "./Form.css"
>>>>>>> 40c6af5a265cf86e98dfa42c9052f2c8144e478c:pages/access/Signup.jsx

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        name,
        email,
        password,
      });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <>

      <div className="door-wrapper">
        <img className="door" src="/door.png" />

        <form className="login-signup-forms" onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
          />

          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />

          <label htmlFor="password"> Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />

          <Link className="button-forms" to="/"><img src="/button.png" /></Link>

          <p>Already have an account?</p>
        <Link to="/login">Login</Link>
        </form>

      
      </div>


    </>
  );
}

export default Signup;