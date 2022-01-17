import React, { useState } from "react";
import TestGradesList from "./TestGradesList";
import TagsList from "./TagsList";

function Profile(props) {
  const [isGradesListOpen, setIsGradesListOpen] = useState(false);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleGradesListClick = () => {
    if (props.grades.length >= 1) {
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

  return (
    <div className="profile">
      <div className="profile-img-container">
        <img className="profile-img" src={props.img} alt={props.name} />
      </div>
      <div className="profile-info-container">
        <ul className="profile-info">
          <h1 className="profile-name">{props.name}</h1>
          <li className="email">Email: {props.company}</li>
          <li className="skill">Skill: {props.skill}</li>
          <li className="average">Average: {props.average}%</li>
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
        {isGradesListOpen ? <TestGradesList grades={props.grades} /> : null}
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
