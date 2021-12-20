import React from "react";
import { v4 as uuidv4 } from "uuid";

function TestGradesList({ grades }) {
  const renderTestGrades = () => {
    return grades.map((grade, idx) => (
      <li key={uuidv4()}>
        Test {idx + 1}:<span className="test-grade"> {grade}% </span>
      </li>
    ));
  };

  return <ul className="test-grades-list">{renderTestGrades()}</ul>;
}

export default TestGradesList;
