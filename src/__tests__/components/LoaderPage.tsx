import React from 'react';
import { render } from '@testing-library/react';
import LoaderPage from '../../components/LoaderPage';

describe('Component -> LoaderPage', () => {
  it('Should be able to render corretly', () => {
    const loader = render(<LoaderPage />)

    expect(loader).toBeTruthy();
  })
})