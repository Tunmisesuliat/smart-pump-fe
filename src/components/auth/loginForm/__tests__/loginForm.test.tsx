/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react/react-in-jsx-scope */

import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import LoginForm from '..'; // Adjust the import path as necessary
import { ReactNode } from 'react';

// Mock the auth context
vi.mock('../../../../contexts/authContext', () => ({
  useAuth: () => ({
    loginUser: vi.fn(), // Mock the loginUser function
  }),
  AuthProvider: ({ children }: { children: ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('LoginForm', () => {
  // Wrap the component with MemoryRouter for routing context
  const setup = () => {
    return render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
  };

  test('renders login form', () => {
    setup();
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  test('shows required error messages on submit', async () => {
    setup();

    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Password is required/i)
    ).toBeInTheDocument();
  });
});
