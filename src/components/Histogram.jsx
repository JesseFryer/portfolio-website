import React, { useEffect, useState } from 'react';

const Histogram = ({ skills }) => {
  const columnHeight = 200; // Fixed height for the columns
  const [columnHeights, setColumnHeights] = useState({});
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const newHeights = {};
    let newMaxHeight = 0;
    for (const language in skills) {
      newHeights[language] = (skills[language] / 100) * columnHeight; // Calculate the actual heights
      if (newHeights[language] > newMaxHeight) {
        newMaxHeight = newHeights[language];
      }
    }
    setMaxHeight(newMaxHeight);
    setColumnHeights(newHeights); // Update column heights to trigger re-render
  }, [skills]); // Run effect whenever `skills` changes

  return (
    <div className="w-full max-w-screen-md flex justify-around mt-6 items-end" style={{ height: columnHeight }}>
      {Object.keys(skills).map((language, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`${columnHeights[language] === maxHeight ? 'bg-yellow-600' : "bg-yellow-700"} w-8 rounded-md`}
            style={{
              height: `${columnHeights[language] || 0}px`, // Use the heights from state
              transition: 'height 0.5s ease', // Smooth transition effect
            }}
          ></div>
          <p className={`${columnHeights[language] === maxHeight ? 'text-white' : "text-gray-300"} mb-12 font-semibold`}>{language}</p>
        </div>
      ))}
    </div>
  );
};

export default Histogram;