// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import SkillsForm from './SkillsForm';
// import { userEvent } from '@testing-library/user-event/dist/types/setup';

// // Mock redux store
// const mockStore = createStore(() => ({}));

// describe('SkillsForm', () => {
//   it'calls onSubmit with the username and password when submit is clicked', () => {
//     const handleSubmit = jest.fn();
//     const { getByLabelText, getByText } = render(
//       <Login onSubmit={handleSubmit} />
//     );
//     const user = { username: 'michelle', password: 'smith' };

//     userEvent.type(screen.getByLabelText(/username/i), user.username);
//     userEvent.type(getByLabelText(/password/i), user.password);
//     userEvent.click(getByText(/submit/i));

//     expect(handleSubmit).toHaveBeenCalledTimes(1);
//     expect(handleSubmit).toHaveBeenCalledWith(user);
//   });

//   it'shows an error message when submit is clicked and no username is provided', () => {
//     const handleSubmit = jest.fn();
//     const { getByLabelText, getByText, getByRole } = render(
//       <Login onSubmit={handleSubmit} />
//     );

//     userEvent.type(getByLabelText(/password/i), 'anything');
//     userEvent.click(getByText(/submit/i));

//     const errorMessage = getByRole('alert');
//     expect(errorMessage).toHaveTextContent(/username is required/i);
//     expect(handleSubmit).not.toHaveBeenCalled();
//   });

//   it'shows an error message when submit is clicked and no password is provided', () => {
//     const handleSubmit = jest.fn();
//     const { getByLabelText, getByText, getByRole } = render(
//       <Login onSubmit={handleSubmit} />
//     );

//     userEvent.type(getByLabelText(/username/i), 'anything');
//     userEvent.click(getByText(/submit/i));

//     const errorMessage = getByRole('alert');
//     expect(errorMessage).toHaveTextContent(/password is required/i);
//     expect(handleSubmit).not.toHaveBeenCalled();
//   });
// });
