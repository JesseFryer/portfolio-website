import { React, useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousal';
import Histogram from '../components/Histogram';

const Projects = ({projects}) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentSkills, setCurrentSkills] = useState(projects[0]?.skills || {}); // Initialize with first project's skills

  useEffect(() => {
    // Update skills when the project index changes
    setCurrentSkills(projects[currentProjectIndex]?.skills || {});
  }, [currentProjectIndex, projects]);

  const handleCarouselChange = (index) => {
    setCurrentProjectIndex(index);
    setCurrentSkills(projects[index].skills);
  };

  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <Histogram skills={currentSkills} />
      <Carousel 
        items={projects.map((project, index) => (
          <ProjectCard project={project} />
        ))} 
        onChange={handleCarouselChange} // Track index change
      />
    </section>
  );
};

export default Projects;