import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function ContactForms() {
  const [contactform, setContactform] = useState({
    name: '',
    email: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    description: '',
  });

  const { name, email, description } = contactform;
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setContactform({ ...contactform, [e.target.name]: e.target.value });
    // Clear the associated error when the user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    let newErrors = {};
    if (!name.trim()) {
      newErrors = { ...newErrors, name: 'Please enter the name.' };
    }

    if (!email.trim()) {
      newErrors = { ...newErrors, email: 'Please enter your email.' };
    }

    if (!description.trim()) {
      newErrors = { ...newErrors, description: 'Please give a brief description.' };
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, update the state and stop the submission
      setErrors(newErrors);
      return;
    }

    // Your API call logic
    let data = {
      name: contactform.name,
      email: contactform.email,
      description: contactform.description,
    };

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/contact',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: 'JSESSIONID=34C0FC47259901941230FFEA19A7C63A',
      },
      data: JSON.stringify(data),
    };

    try {
      const response = await axios(config);

      console.log(JSON.stringify(response.data));
      alert('Contactform Submitted Successfully');
      navigate('/');
    } catch (error) {
      console.log('Error during submission!', error);
      alert('Error during submission!');
    }
  };

  return (
    <div className="container" style={{ marginRight: '50px', margin: '10px auto' }}>
      <h1>Contact Us Here!!</h1>
      <form onSubmit={(e) => onSubmit(e)} className="login-form-container">
        <div>
          <label htmlFor="contactform-name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="contactform-name"
            name="name"
            placeholder="Name"
            onChange={(e) => onInputChange(e)}
            value={name}
            className="form-input"
            style={{ marginRight: '50px' }}
          />
          <div className="error-message" style={{ marginBottom: '10px' ,marginRight: '50px' }}>{errors.name}</div>
        </div>

        <div>
          <label htmlFor="contactform-email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="contactform-email"
            name="email"
            placeholder="Email"
            onChange={(e) => onInputChange(e)}
            value={email}
            className="form-input"
            style={{ marginRight: '50px' }}
          />
          <div className="error-message" style={{ marginBottom: '10px', marginRight: '50px' }}>{errors.email}</div>
        </div>

        <div>
          <label htmlFor="contactform-description" className="form-label" style={{ marginRight: '300px', display: 'block' }} >
            Description:
          </label>
          <textarea
            type="description"
            id="contactform-description"
            name="description"
            placeholder="Description"
            onChange={(e) => onInputChange(e)}
            value={description}
            className="form-input"
            style={{ marginLeft: '90px' }}
          />
          <div className="error-message"  style={{ marginBottom: '20px', marginLeft: '10px'}}>{errors.description}</div>
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

export default ContactForms;



