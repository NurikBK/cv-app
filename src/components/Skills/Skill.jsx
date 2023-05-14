import React from 'react';

const Skill = ({ skill }) => {
  const width = {
    width: `${skill.range}%`,
  };
  return (
    <div className="skill-range" style={width}>
      <h3>{skill.name}</h3>
    </div>
  );
};

export default Skill;
