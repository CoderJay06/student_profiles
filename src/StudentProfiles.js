import React, { useState, useEffect } from "react";

function StudentProfiles() {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const studentsUrl = "https://api.hatchways.io/assessment/students";

  useEffect(() => {
    fetch(studentsUrl)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="student-profiles">
      <h1>Student Profiles</h1>
    </div>
  );
}

export default StudentProfiles;
