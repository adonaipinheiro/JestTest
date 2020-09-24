import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Header from '../../components/Header';

const mockHistory = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockHistory
    })
  }
})

describe('Component -> Header', () => {
  it('Should be able to render corretly', () => {
    const header = render(<Header />)

    expect(header).toBeTruthy();
  })

  it('Should do logOff app', async () => {
    const {getByText} = render(<Header />)

    const buttonLogOff = getByText('Sair');

    fireEvent.click(buttonLogOff);

    await waitFor(()=>{
      expect(mockHistory).toBeCalledWith('/');
    })
  })
})
