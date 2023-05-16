import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik, Form } from 'formik';
import { CInput } from './CInput';

describe('CInput', () => {
  it('renders label and input field', () => {
    render(
      <Formik initialValues={{}}>
        <Form>
          <CInput label="Username" name="username" type="text" />
        </Form>
      </Formik>
    );

    const labelElement = screen.getByTestId('label');
    const inputElement = screen.getByTestId('input');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it('renders error message when meta.error is present', () => {
    render(
      <Formik
        initialValues={{}}
        initialErrors={{ username: 'Required' }}
        initialTouched={{ username: true }}
      >
        <Form>
          <CInput label="Username" name="username" type="text" />
        </Form>
      </Formik>
    );

    const errorMessage = screen.getByText('Required');

    expect(errorMessage).toBeInTheDocument();
  });

  it('does not render error message when meta.error is not present', () => {
    render(
      <Formik
        initialValues={{}}
        initialErrors={{ username: 'Required' }}
        initialTouched={{ username: false }}
      >
        <Form>
          <CInput label="Username" name="username" type="text" />
        </Form>
      </Formik>
    );

    const errorMessage = screen.queryByText('Required');

    expect(errorMessage).not.toBeInTheDocument();
  });
});
