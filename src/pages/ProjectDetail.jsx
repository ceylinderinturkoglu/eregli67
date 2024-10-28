import React from "react";
import { useParams } from "react-router-dom";
import  projects from "../data";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(
    (project) => project.id === parseInt(projectId)
  );

  return (
    <div>
      <img src={project.image} />
      <h1>{project.title}</h1>
      <p>{project.content}</p>
    </div>
  );
}

export default ProjectDetail;
