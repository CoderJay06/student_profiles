import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import ProfileSearchBox from "./ProfileSearchBox";
import TagSearchBox from "./TagSearchBox";

function StudentProfiles() {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const [profileSearchInput, setProfileSearchInput] = useState("");
  const [isSearchingByName, setIsSearchingByName] = useState(false);
  const [tagSearchInput, setTagSearchInput] = useState("");
  const [isSearchingByTag, setIsSearchingByTag] = useState(false);
  // const [tags, setTags] = useState([]);

  const studentsUrl = "https://api.hatchways.io/assessment/students";

  const handleProfileSearchInput = (e) => {
    setIsSearchingByName(true);
    setProfileSearchInput(e.target.value);
  };

  const handleTagSearchInput = (e) => {
    setIsSearchingByTag(true);
    setTagSearchInput(e.target.value);
  };

  const getAverageGrade = (grades) => {
    const gradeSum = grades.reduce((sum, grade) => sum + Number(grade), 0);
    return Math.floor(gradeSum / grades.length).toFixed(2);
  };

  const renderStudentProfiles = () => {
    return studentProfiles.map((student) => (
      <Profile
        key={student.id}
        img={student.pic}
        name={`${student.firstName} ${student.lastName}`}
        email={student.email}
        company={student.company}
        skill={student.skill}
        average={getAverageGrade(student.grades)}
        grades={student.grades}
        // tags={tags}
        // setTags={setTags}
      />
    ));
  };

  const filterNamesBySearchInput = () =>
    studentProfiles.filter(
      (student) =>
        student.firstName
          .toLowerCase()
          .includes(profileSearchInput.toLowerCase()) ||
        student.lastName
          .toLowerCase()
          .includes(profileSearchInput.toLowerCase())
    );

  const renderStudentProfilesByName = () => {
    const studentProfilesByName = filterNamesBySearchInput();

    return studentProfilesByName.map((student) => (
      <Profile
        key={student.id}
        img={student.pic}
        name={`${student.firstName} ${student.lastName}`}
        email={student.email}
        company={student.company}
        skill={student.skill}
        average={getAverageGrade(student.grades)}
        grades={student.grades}
        // tags={tags}
        // setTags={setTags}
      />
    ));
  };

  useEffect(() => {
    fetch(studentsUrl)
      .then((res) => res.json())
      .then(({ students }) => setStudentProfiles(students));
  }, []);

  return (
    <div className="student-profiles">
      <ProfileSearchBox
        setSearchInput={handleProfileSearchInput}
        searchInput={profileSearchInput}
      />
      <TagSearchBox
        setSearchInput={handleTagSearchInput}
        searchInput={tagSearchInput}
      />
      {isSearchingByName
        ? renderStudentProfilesByName()
        : renderStudentProfiles()}
    </div>
  );
}

export default StudentProfiles;
