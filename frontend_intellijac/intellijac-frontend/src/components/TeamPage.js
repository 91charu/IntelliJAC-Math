import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Team.css";

const TeamPage = () => {
  return (
<div className="body">
    <h1 className="header">Developed By</h1>


<div className="team-container">
    <div className="developer-card"  >
        <h2>Charulatha Ravi</h2>
        <h4>Role: Full Stack Developer</h4>
        <p>Email: charu@launchcode.com</p>

        <img className="developer-image" src={require('./images/Charu.png')} alt="Charulatha Ravi" />
    </div>



</div>
<Link to="/">Go to HomePage</Link>
</div>
 );
}
export default TeamPage;