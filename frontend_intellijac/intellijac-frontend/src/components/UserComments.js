import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function UserComments() {
  // Sending comments to the backend
  const [userComment, setUserComment] = useState({
    name: "",
    comment: "",
  })

  const [submissionMessage, setSubmissionMessage] = useState("");

  const { name, comment } = userComment

  const onInputChange = (e) => {
    setUserComment({ ...userComment, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/comments/add", userComment);
      setSubmissionMessage("Thankyou for your comment!!");
    } catch (error) {
      console.error("Error submitting comment:", error);
      setSubmissionMessage("Error submitting comment. Please try again.");
    }
  };

  return (
    <div className="container" style={{ marginRight: '50px', margin: '10px auto' }}>
      <h1>Your Comments!!</h1>
      <form onSubmit={(e) => onSubmit(e)} className="login-form-container">
        <div>
          <label htmlFor="userComment-name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="userComment-name"
            name="name"
            placeholder="Name"
            onChange={(e) => onInputChange(e)}
            value={name}
            className="form-input"
            style={{ marginRight: '50px' }}
          />
        </div>
        <div>
          <label htmlFor="userComment-comment" className="form-label" style={{ marginRight: '270px', display: 'block' }} >
            Comment:
          </label>
          <textarea
            type="description"
            id="userComment-comment"
            name="comment"
            placeholder="Your Comment"
            onChange={(e) => onInputChange(e)}
            value={comment}
            className="form-input"
            style={{ marginLeft: '80px' }}
          />
        </div>
        <div className="button-container">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
        <br />
        {submissionMessage && <p style= {{fontSize: "30px"}}>{submissionMessage}</p>}
      </form>

      <Link to="/">Go to HomePage</Link>
    </div>
  );
}

export default UserComments;
