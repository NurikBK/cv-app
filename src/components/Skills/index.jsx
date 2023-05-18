import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkills } from '../../features/skills/skillsSlice';
import SkillsForm from './SkillForm/SkillsForm';
import { StyledSkills } from '../styles/Skills.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';
import Skill from './Skill/Skill';
import { Fade } from 'react-awesome-reveal';

const Skills = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  let data = useSelector((state) => state.skills.data);
  const status = useSelector((state) => state.skills.status);
  const error = useSelector((state) => state.skills.error);

  useEffect(() => {
    if (data.length < 2) {
      dispatch(fetchSkills());
    }
  }, [dispatch, data]);

  if (status === 'failed' || error) {
    return (
      <div className="error">
        Something went wrong, please review your server connection
      </div>
    );
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
