import React, { useState } from 'react';
import Navbar from '../Landingpage/Navbar'; // Adjust the path as per your project structure
import './Talent.css'; // Import the CSS file for styling

// Sample data for talents and individuals
const talentData = [
  {
    name: 'Singing',
    individuals: ['Alice', 'Bob', 'Chris'],
  },
  {
    name: 'Dancing',
    individuals: ['Diana', 'Eve', 'Frank'],
  },
  {
    name: 'Modelling',
    individuals: ['Grace', 'Hannah', 'Isaac'],
  },
];

const Talent = () => {
  const [selectedTalent, setSelectedTalent] = useState(null);

  // Handles the talent click event
  const handleTalentClick = (talentName) => {
    const talent = talentData.find((t) => t.name === talentName);
    setSelectedTalent(talent);
  };

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Talent Pool Section */}
      <div className="container">
        <h1 className="header">Talent Pool</h1>

        {/* List of Talents */}
        <div className="talentList">
          <h2>Talents</h2>
          {talentData.map((talent, index) => (
            <div
              key={index}
              className="talentItem"
              onClick={() => handleTalentClick(talent.name)}
            >
              {talent.name}
            </div>
          ))}
        </div>

        {/* List of Individuals */}
        <div className="individualList">
          <h2>Individuals</h2>
          {selectedTalent ? (
            <>
              <h3>{selectedTalent.name}</h3>
              <ul>
                {selectedTalent.individuals.map((individual, index) => (
                  <li key={index}>{individual}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>Please select a talent to see individuals.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Talent;
