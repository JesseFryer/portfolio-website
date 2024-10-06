import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousal';

const Projects = ({projects}) => {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <Carousel 
        items={projects.map((project, index) => (
          <ProjectCard project={project} />
        ))} 
      />
    </section>
  );
};

export default Projects;