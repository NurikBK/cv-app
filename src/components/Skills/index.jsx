import React, { useState } from 'react';
import SkillsForm from './SkillsForm';
import { StyledSkills } from '../styles/Skills.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';
import Skill from './Skill';

const Skills = () => {
  const [isClicked, setIsClicked] = useState(false);
  const data = [
    {
      name: 'HTML',
      range: '80',
    },
    {
      name: 'CSS',
      range: '60',
    },
  ];
  return (
    <StyledSkills>
      <button
        className="btn btn-open"
        onClick={() => setIsClicked((prevState) => !prevState)}
      >
        <i>
          <FontAwesomeIcon icon={faPenClip} />
        </i>
        Open Edit
      </button>
      {isClicked && <SkillsForm />}

      {data.map((item, index) => (
        <Skill key={index} skill={item} />
      ))}
      <div className="skills-grade">
        <p className="grade first">Beginner</p>
        <p className="grade second">Proficient</p>
        <p className="grade third">Expert</p>
        <p className="grade fourth">Master</p>
      </div>
    </StyledSkills>
  );
};

export default Skills;
