import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Registerforms() {
  const [registerform, setRegisterform] = useState({
    employeename: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    employeename: '',
    email: '',
    password: '',
  });

  const { employeename, email, password } = registerform;
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setRegisterform({ ...registerform, [e.target.name]: e.target.value });
    // Clear the associated error when the user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    let newErrors = {};
    if (!employeename.trim()) {
      newErrors = { ...newErrors, employeename: 'Please enter the user name.' };
    }

    if (!email.trim()) {
      newErrors = { ...newErrors, email: 'Please enter your email.' };
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
      employeename: registerform.employeename,
      email: registerform.email,
      password: registerform.password,
    };

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/register',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        //Cookie: 'JSESSIONID=34C0FC47259901941230FFEA19A7C63A',
      },
      data: JSON.stringify(data),
    };

    try {
      const response = await axios(config);

      console.log(JSON.stringify(response.data));
      alert('User Registered Successfully');
      navigate('/api/login');
    } catch (error) {
      console.log('Error during registration!', error);
      alert('Error during registration!');
    }
  };

  return (
    <div className="container" style={{ marginRight: '50px', margin: '10px auto' }}>
      <h1>Register Here!!</h1>
      <form onSubmit={(e) => onSubmit(e)} className="login-form-container">
        <div>
          <label htmlFor="registerform-employeename" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="registerform-employeename"
            name="employeename"
            placeholder="Name"
            onChange={(e) => onInputChange(e)}
            value={employeename}
            className="form-input"
            style={{ marginRight: '50px' }}
          />
          <div className="error-message" style={{ marginBottom: '10px' ,marginLeft: '30px' }}>{errors.employeename}</div>
        </div>

        <div>
          <label htmlFor="registerform-email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="registerform-email"
            name="email"
            placeholder="Email"
            onChange={(e) => onInputChange(e)}
            value={email}
            className="form-input"
            style={{ marginRight: '20px' }}
          />
          <div className="error-message" style={{ marginBottom: '10px', marginRight: '15px' }}>{errors.email}</div>
        </div>

        <div>
          <label htmlFor="registerform-password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="registerform-password"
            name="password"
            placeholder="Password"
            onChange={(e) => onInputChange(e)}
            value={password}
            className="form-input"
            style={{ marginRight: '50px' }}
          />
          <div className="error-message"  style={{ marginBottom: '20px', marginLeft: '10px'}}>{errors.password}</div>
        </div>

        <div className="button-container">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
      <Link to="/">Go to HomePage</Link>
    </div>
  );
}

export default Registerforms;



