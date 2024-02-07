import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/Authentication.css";

function Loginforms() {
  const [loginform, setLoginform] = useState({
    employeename: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    employeename: '',
    password: '',
  });

  const { employeename, password } = loginform;
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setLoginform({ ...loginform, [e.target.name]: e.target.value });
    // Clear the associated error when the user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    let newErrors = {};
    if (!employeename.trim()) {
      newErrors = { ...newErrors, employeename: 'Please enter your username.' };
    }

    if (!password.trim()) {
      newErrors = { ...newErrors, password: 'Please enter your password.' };
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, update the state and stop the submission
      setErrors(newErrors);
      return;
    }

    // Your API call logic
    let data = {
      employeename: loginform.employeename,
      password: loginform.password,
    };

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/login',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        //Cookie: 'JSESSIONID=34C0FC47259901941230FFEA19A7C63A',
      },
      data: JSON.stringify(data),
    };

    try {
      const response = await axios(config);

      if (response.data.message === 'Username does not exists') {
        setErrors({ ...errors, employeename: response.data.message });
      } else if (response.data.message === 'Login Success') {
        alert('Login Success');
        navigate('/quiz');
      } else {
        setErrors({ ...errors, password: response.data.message });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" style={{ marginRight: '50px', margin: '10px auto' }}>
      <h1>Lets Go!!</h1>
      <form onSubmit={(e) => onSubmit(e)} className="login-form-container">
        <div>
          <label htmlFor="loginform-employeename" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="loginform-employeename"
            name="employeename"
            placeholder="Name"
            onChange={(e) => onInputChange(e)}
            value={employeename}
            className="form-input"
            style={{ marginRight: '30px' }}
          />
          <div className="error-message" style={{ marginBottom: '10px' }}>{errors.employeename}</div>
        </div>
        <div>
          <label htmlFor="loginform-password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="loginform-password"
            name="password"
            placeholder="Password"
            onChange={(e) => onInputChange(e)}
            value={password}
            className="form-input"
            style={{ marginRight: '30px' }}
          />
          <div className="error-message" style={{ marginBottom: '20px', marginLeft: '15px' }}>{errors.password}</div>
        </div>

        <div className="button-container">
          <button type="submit" className="button">
            Login
          </button>
        </div>
      </form>
      <p style={{ marginTop: '30px', marginBottom: '30px', textAlign: "center" }}>
        New member? Come, let's get started <Link to="/api/register">HERE!!</Link>
      </p>
      <Link to="/">Go to HomePage</Link>
    </div>
  );
}

export default Loginforms;


