import React from 'react';

const ProjectCard = ({project}) => {
  return (
    <div className="min-w-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          <span>{project.heading}</span>
          <span className="ml-2 text-xl font-bold">GH</span>
        </h2>
        <p className="mt-4 text-gray-600">{project.description}</p>
      </div>
      <div className="w-full h-64 bg-gray-200 flex justify-center items-center">
        {/* Image Container */}
        <img 
          className="object-cover h-full w-full p-6 bg-white rounded-lg" 
          src={project.imgPath} 
          alt="Portfolio item" 
        />
      </div>
    </div>
  );
};

export default ProjectCard;