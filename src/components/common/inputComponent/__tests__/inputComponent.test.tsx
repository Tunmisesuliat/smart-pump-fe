/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react';
import InputComponent from '..';

describe('InputComponent', () => {
  test('renders with a label', () => {
    render(<InputComponent label="Test Label" id="test-input" />);

    // Check if the label is in the document
    const label = screen.getByLabelText(/test label/i);
    expect(label).toBeInTheDocument();
  });

  test('renders without a label', () => {
    render(<InputComponent id="test-input" />);

    // Check that the label is not in the document
    const label = screen.queryByLabelText(/test label/i);
    expect(label).not.toBeInTheDocument();
  });

  test('allows input of text', () => {
    render(<InputComponent id="test-input" />);

    // Get the input element
    const input = screen.getByRole('textbox');

    // Simulate user typing into the input
    fireEvent.change(input, { target: { value: 'Hello World' } });

    // Check the value of the input
    expect(input).toHaveValue('Hello World');
  });

  test('displays an error message when provided', () => {
    render(
      <InputComponent id="test-input" errorMessage="This field is required" />
    );

    // Check if the error message is in the document
    const errorMessage = screen.getByText(/this field is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('does not display an error message when none is provided', () => {
    render(<InputComponent id="test-input" />);

    // Check that the error message is not in the document
    const errorMessage = screen.queryByText(/this field is required/i);
    expect(errorMessage).not.toBeInTheDocument();
  });
});
