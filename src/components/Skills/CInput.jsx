import { useField } from 'formik';

export const CInput = ({ label, ...props }) => {
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
