import * as Yup from 'yup';

export const validationSchema = Yup.object({
  skill: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  range: Yup.number()
    .min(10, 'Must be 10 or more')
    .max(100, 'Must be 100 or less')
    .required('Required'),
});
