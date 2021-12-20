import React, { useState } from "react";
import TestGradesList from "./TestGradesList";

function Profile({ img, name, email, company, skill, average, grades }) {
  const [gradesListOpen, setGradesListOpen] = useState(false);

  const handleGradesListClick = () => {
    if (grades.length >= 1) {
      setGradesListOpen((prevState) => !prevState);
    }
  };

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
        {gradesListOpen ? <TestGradesList grades={grades} /> : null}
      </div>
      <div className="profile-btn-container">
        <button className="test-grades-btn" onClick={handleGradesListClick}>
          {gradesListOpen ? "➖" : "➕"}
        </button>
      </div>
    </div>
  );
}

export default Profile;
