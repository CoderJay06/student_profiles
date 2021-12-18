import React, { useState, useEffect } from "react";
import Profile from "./Profile";

function StudentProfiles() {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const studentsUrl = "https://api.hatchways.io/assessment/students";

  /*
    city: "Fushë-Muhurr"
    company: "Yadel"
    email: "iorton0@imdb.com"
    firstName: "Ingaberg"
    grades: Array(8)
    id: "1"
    lastName: "Orton"
    pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg"
    skill: "Oracle"
  */
  const getAverageGrade = (grades) => {
    const gradeSum = grades.reduce((sum, grade) => sum + grade, 0);

    return Math.floor(gradeSum / grades.length);
  };

  const renderStudentProfiles = () =>
    studentProfiles.map((student) => (
      <Profile
        img={student.pic}
        name={`${student.firstName} ${student.lastName}`}
        email={student.email}
        company={student.company}
        skill={student.skill}
        average={getAverageGrade(student.grades)}
      />
    ));

  useEffect(() => {
    fetch(studentsUrl)
      .then((res) => res.json())
      .then(({ students }) => setStudentProfiles(students));
  }, []);
  console.log("sp: ", studentProfiles);
  return (
    <div className="student-profiles">
      <h1>Student Profiles</h1>
      {renderStudentProfiles()}
    </div>
  );
}

export default StudentProfiles;
