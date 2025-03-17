/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import SubmitButton from '..';

describe('SubmitButton', () => {
  test('renders with default label', () => {
    render(<SubmitButton />);

    // Check if the button is in the document with the default label "Submit"
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();
  });

  test('renders with a custom label', () => {
    render(<SubmitButton label="Login" />);

    // Check if the button is in the document with the custom label
    const button = screen.getByRole('button', { name: /login/i });
    expect(button).toBeInTheDocument();
  });

  test('applies custom styles', () => {
    const { container } = render(
      <SubmitButton style={{ backgroundColor: 'rgb(255, 0, 0)' }} />
    );

    // Check if the button has the custom style applied
    const button = container.querySelector('button');
    expect(button).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  test('has type "submit"', () => {
    render(<SubmitButton />);

    // Check if the button type is "submit"
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('can be disabled', () => {
    render(<SubmitButton disabled />);

    // Check if the button is disabled
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeDisabled();
  });
});
