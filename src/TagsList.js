import React from "react";
import { v4 as uuidv4 } from "uuid";

function TagsList({ tags }) {
  const renderTags = () =>
    tags.map((tag) => (
      <li key={uuidv4()} className="tag">
        {tag}
      </li>
    ));

  return renderTags();
}

export default TagsList;
