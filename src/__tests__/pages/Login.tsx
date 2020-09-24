import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../../pages/Login';

const mockHistory = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockHistory,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Pages -> Login', () => {
  it('Should be able to render corretly', () => {
    const login = render(<Login />)

    expect(login).toBeTruthy();
  })

  it('Should be able to do login', async () => {
    const { getByText } = render(<Login />)

    const button = getByText('Entrar');

    fireEvent.click(button);

    await waitFor(() => {
      expect(mockHistory).toBeCalledWith('/dashboard');
    })
  })
})