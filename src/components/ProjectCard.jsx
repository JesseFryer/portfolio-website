import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="min-w-96 bg-gray-700 shadow-lg rounded-lg overflow-hidden">
      <div className="pt-3 pl-4 pr-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-300">
          <span className="text-yellow-600 font-semibold">{project.heading}</span>
        </h2>
        {/* Conditionally render the GitHub link */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="fa-brands fa-github text-xl text-gray-300 hover:text-white transition-colors duration-300"
          >
            {/* Use Font Awesome GitHub icon */}
          </a>
        )}
      </div>
      <p className="mt-2 pl-4 pr-4 text-gray-400 font-regular">{project.description}</p>
      <div className="w-full h-64 bg-gray-700 p-2 flex justify-center rounded-lg items-center">
        {/* Image Container */}
        <img 
          className="object-cover h-full w-full bg-white rounded-lg" 
          src={project.imgPath} 
          alt="Portfolio item" 
        />
      </div>
    </div>
  );
};

export default ProjectCard;