import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import ProfileSearchBox from "./ProfileSearchBox";
import TagSearchBox from "./TagSearchBox";

function StudentProfiles() {
  const [allStudentProfiles, setAllStudentProfiles] = useState([]);
  const [studentProfilesByName, setStudentProfilesByName] = useState([]);
  const [nameSearchInput, setNameSearchInput] = useState("");
  const [isSearchingByName, setIsSearchingByName] = useState(false);

  const studentsUrl = "https://api.hatchways.io/assessment/students";

  useEffect(() => {
    fetch(studentsUrl)
      .then((res) =>
        !res.ok ? alert(`Fetch error. Status: ${res.status}`) : res.json()
      )
      .then(({ students }) => setAllStudentProfiles(students))
      .catch((error) => alert(error.message));
  }, []);

  // Input Validation
  const isOnlyLetters = (nameInput) => /[a-zA-Z]/.test(nameInput) === true;

  const doesNameMatch = (student) =>
    student.firstName.toLowerCase().includes(nameSearchInput.toLowerCase()) ||
    student.lastName.toLowerCase().includes(nameSearchInput.toLowerCase());

  const filterProfilesByNameInput = () =>
    allStudentProfiles.filter((student) => doesNameMatch(student));

  const handleNameSearchInput = (e) => {
    const { value } = e.target;
    setIsSearchingByName(true);
    setNameSearchInput(value);
    if (isOnlyLetters(nameSearchInput)) {
      setStudentProfilesByName(filterProfilesByNameInput());
    }
  };

  const getAverageGrade = (grades) => {
    const gradeSum = grades.reduce((sum, grade) => sum + Number(grade), 0);
    return Math.floor(gradeSum / grades.length).toFixed(2);
  };

  const render = (studentProfiles) => {
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
      />
    ));
  };

  return (
    <div className="student-profiles">
      <ProfileSearchBox
        setSearchInput={handleNameSearchInput}
        searchInput={nameSearchInput}
      />
      <TagSearchBox />
      {isSearchingByName && isOnlyLetters(nameSearchInput)
        ? render(studentProfilesByName)
        : render(allStudentProfiles)}
    </div>
  );
}

export default StudentProfiles;
