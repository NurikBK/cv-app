import React from 'react';
import { Formik, Form } from 'formik';
import { useField } from 'formik';
import { validationSchema } from './validationSchema';

const CInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="wrapper">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className="error">{meta.error}</p>
      ) : null}
    </div>
  );
};

const SkillsForm = () => {
  const initialValues = {
    skill: '',
    range: '',
  };
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        {({ values, handleSubmit, dirty, isValid }) => (
          <Form className="form-container" onSubmit={handleSubmit}>
            <CInput
              label="Skill name:"
              name="skill"
              type="text"
              placeholder="Enter skill name"
            />

            <CInput
              label="Skill range:"
              name="range"
              type="number"
              placeholder="Enter skill range "
            />

            <button
              type="submit"
              className="btn"
              disabled={!dirty || !isValid}
            >
              Add Skill
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SkillsForm;
