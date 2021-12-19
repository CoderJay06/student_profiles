import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import ProfileSearchBox from "./ProfileSearchBox";

function StudentProfiles() {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isSearchingByName, setIsSearchingByName] = useState(false);
  const studentsUrl = "https://api.hatchways.io/assessment/students";

  const handleSearchInput = (e) => {
    setIsSearchingByName(true);
    setSearchInput(e.target.value);
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
      />
    ));
  };

  const filterNamesBySearchInput = () =>
    studentProfiles.filter(
      (student) =>
        student.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchInput.toLowerCase())
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
        setSearchInput={handleSearchInput}
        searchInput={searchInput}
      />
      {isSearchingByName
        ? renderStudentProfilesByName()
        : renderStudentProfiles()}
    </div>
  );
}

export default StudentProfiles;
