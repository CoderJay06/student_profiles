import React, { useState } from "react";

function Profile({ img, name, email, company, skill, average }) {
  return (
    <div className="profile">
      <img className="profile-img" src={img} alt={name} />
      <h1 className="profile-name">{name}</h1>
      <ul className="profile-info">
        <li className="email">Email: {email}</li>
        <li className="company">Company: {company}</li>
        <li className="skill">Skill: {skill}</li>
        <li className="average">Average: {average}%</li>
      </ul>
    </div>
  );
}

export default Profile;
