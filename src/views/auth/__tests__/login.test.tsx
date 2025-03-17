/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Login from '../login';

vi.mock('../../../components/layout/appLayout', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="app-layout">{children}</div>
  ),
}));

vi.mock('../../../components/auth/loginForm', () => ({
  default: () => <div data-testid="login-form">Login Form</div>,
}));

describe('Login Page', () => {
  test('renders the Login component', () => {
    render(<Login />);

    expect(screen.getByTestId('app-layout')).toBeInTheDocument();
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });
});
