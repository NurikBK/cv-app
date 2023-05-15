import React from 'react';
import { Formik, Form } from 'formik';
import { validationSchema } from './validationSchema';
import { addSkill, fetchSkills } from '../../features/skills/skillsSlice';
import { useDispatch } from 'react-redux';
import { initialValues } from './initialValues';
import { CInput } from './CInput';

const SkillsForm = () => {
  const dispatch = useDispatch();

  const handleAddSkill = async (skill) => {
    await dispatch(addSkill(skill));
    dispatch(fetchSkills());
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await handleAddSkill(values);
          resetForm();
        }}
      >
        {({ values, handleSubmit, dirty, isValid }) => (
          <Form className="form-container" onSubmit={handleSubmit}>
            <CInput
              label="Skill name:"
              name="name"
              type="text"
              placeholder="Enter skill name"
            />

            <CInput
              label="Skill range:"
              name="range"
              type="text"
              placeholder="Enter skill range "
            />

            <button type="submit" className="btn" disabled={!dirty || !isValid}>
              Add Skill
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SkillsForm;
