import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-normal mb-6">
          <span className="text-4xl text-gray-300">Hi I'm </span>
          <span className="font-semibold text-yellow-600">Jesse</span>
        </h1>
        <p className="text-2xl mb-8 text-gray-300">A passionate Software Developer</p>
        <p className="text-sm mb-8 text-gray-400">I can also make a mean latte</p>
        <Link to="/contact">
          <button className="border-2 border-yellow-600 bg-gray-900 hover:bg-yellow-600 hover:border-white text-white font-semidbold py-3 px-6 rounded transition duration-300">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Landing;