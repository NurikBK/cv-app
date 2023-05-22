import React, { useState } from 'react';
import SkillsForm from './SkillForm/SkillsForm';
import { StyledSkills } from '../styles/Skills.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';
import Skill from './Skill/Skill';
import { Fade } from 'react-awesome-reveal';

const Skills = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);

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
      {isClicked && (
        <Fade triggerOnce={true}>
          <SkillsForm />
        </Fade>
      )}

      {data.map((item) => (
        <Fade triggerOnce={true} key={item.id}>
          <Skill skill={item} />
        </Fade>
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
