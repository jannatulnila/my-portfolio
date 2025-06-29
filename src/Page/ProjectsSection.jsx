import React, { useEffect, useState } from "react";
import ProjectsCards from "./ProjectsCards";


const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projectsInfo.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Failed to load project data:", error));
  }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-3xl font-bold text-center mb-10">My Projects</h1>
      {projects.map((project, index) => (
        <ProjectsCards key={index} project={project}/>
        
      ))}
    </section>
  );
};

export default ProjectsSection;
