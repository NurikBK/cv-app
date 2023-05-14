import * as Yup from 'yup';

export const validationSchema = Yup.object({
  skill: Yup.string().required('Skill name is a requaired field'),
  range: Yup.number()
    .min(10, 'Skill range must be greather than or equal to 10')
    .max(100, 'Skill range must be less than or equal to 100')
    .typeError('Range must be a number')
    .required('Skill range is a requaired field'),
});
