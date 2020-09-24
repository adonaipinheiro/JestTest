import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../../pages/NotFound';

jest.mock('react-router-dom', () => {
  return {
    Link: ({children}: {children: React.ReactNode}) => children,
  };
});

describe('Pages -> NotFound', () => {
  it('Should be able to render corretly', () => {
    const notFound = render(<NotFound />)

    expect(notFound).toBeTruthy();
  })

  it('Should have a #404 text', () => {
    const {getByText} = render(<NotFound />)

    const title = getByText('#404');
    const link = getByText('Voltar para o início');

    expect(title).toBeVisible();
    expect(link).toBeVisible();
  })
})