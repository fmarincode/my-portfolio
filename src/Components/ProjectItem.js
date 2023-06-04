import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate()
  console.log(image[0])
  return (
    <div
      className="projectItem" onClick={() => {navigate("/project/" + id)}}>
      <div style={{ backgroundImage: `url(${image[0]})` }} className="bgImage" />
      <h3> {name} </h3>
    </div>
  );
}

export default ProjectItem;