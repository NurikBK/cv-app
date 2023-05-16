import React from 'react';

const Skill = ({ skill }) => {
  const width = {
    width: `${skill?.range}%`,
  };

 
  return (
    <div className="skill-range" style={width} data-testid='skill-range'>
      <h3>{skill?.name}</h3>
    </div>
  );
};

export default Skill;
