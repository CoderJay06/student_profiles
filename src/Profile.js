import React, { useState } from "react";
import TestGradesList from "./TestGradesList";
import TagsList from "./TagsList";

function Profile({ student }) {
  const [isGradesListOpen, setIsGradesListOpen] = useState(false);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleGradesListClick = () => {
    if (student.grades.length >= 1) {
      setIsGradesListOpen((prevState) => !prevState);
    }
  };

  const handleSettingTag = (e) => setTag(e.target.value);

  const handleAddingTag = (e) => {
    if (e.key === "Enter") {
      setTags((prevTags) => [...prevTags, tag]);
      setTag("");
    }
  };

  const getAverageGrade = (grades) => {
    const gradeSum = grades.reduce((sum, grade) => sum + Number(grade), 0);
    return Math.floor(gradeSum / grades.length).toFixed(2);
  };

  return (
    <div className="profile">
      <div className="profile-img-container">
        <img className="profile-img" src={student.pic} alt={student.name} />
      </div>
      <div className="profile-info-container">
        <ul className="profile-info">
          <h1 className="profile-name">
            {student.firstName} {student.lastName}
          </h1>
          <li className="email">Email: {student.company}</li>
          <li className="skill">Skill: {student.skill}</li>
          <li className="average">
            Average: {getAverageGrade(student.grades)}%
          </li>
          {tags.length >= 1 ? <TagsList tags={tags} /> : null}
          <li>
            <input
              className="profile-tag-input"
              type="text"
              value={tag}
              onChange={handleSettingTag}
              onKeyUp={handleAddingTag}
              placeholder="Add a tag"
            />
          </li>
        </ul>
        {isGradesListOpen ? <TestGradesList grades={student.grades} /> : null}
      </div>
      <div className="profile-btn-container">
        <button className="test-grades-btn" onClick={handleGradesListClick}>
          {isGradesListOpen ? "➖" : "➕"}
        </button>
      </div>
    </div>
  );
}

export default Profile;
