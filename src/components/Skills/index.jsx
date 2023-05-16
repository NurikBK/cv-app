import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkills } from '../../features/skills/skillsSlice';
import SkillsForm from './SkillForm/SkillsForm';
import { StyledSkills } from '../styles/Skills.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';
import Skill from './Skill/Skill';

const Skills = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const data = useSelector((state) => state.skills.data);
  const status = useSelector((state) => state.skills.status);
  const error = useSelector((state) => state.skills.error);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

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

      {data.map((item) => (
        <Skill key={item.id} skill={item} />
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
