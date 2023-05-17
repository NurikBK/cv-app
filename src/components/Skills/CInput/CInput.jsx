import { useField } from 'formik';

export const CInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="wrapper">
      <label htmlFor={props.id || props.name} data-testid="label">
        {label}
      </label>
      <input
        {...field}
        {...props}
        id={props.id || props.name}
        data-testid="input"
        autoComplete="true"
      />
      {meta.touched && meta.error ? (
        <p className="error" data-testid="error">
          {meta.error}
        </p>
      ) : null}
    </div>
  );
};
