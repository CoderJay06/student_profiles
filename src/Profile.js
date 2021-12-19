import React, { useState } from "react";

function Profile({ img, name, email, company, skill, average }) {
  return (
    <div className="profile">
      <div className="profile-img-container">
        <img className="profile-img" src={img} alt={name} />
      </div>
      <div className="profile-info-container">
        <ul className="profile-info">
          <h1 className="profile-name">{name}</h1>
          <li className="email">Email: {email}</li>
          <li className="company">Company: {company}</li>
          <li className="skill">Skill: {skill}</li>
          <li className="average">Average: {average}%</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
