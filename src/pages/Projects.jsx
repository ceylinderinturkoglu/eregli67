import { Link, Outlet } from "react-router-dom";
import projects from "../data";

function Projects() {
  return (
    <div>
      <h1>PROJELERİMİZ</h1>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <Link to={`${project.id}`}>{project.title}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
export default Projects;
