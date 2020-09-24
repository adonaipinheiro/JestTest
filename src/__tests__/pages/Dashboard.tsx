import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';

describe('Pages -> Dashboard', () => {
  it('Should be able to render corretly', () => {
    const dashboard = render(<Dashboard />)

    expect(dashboard).toBeTruthy();
  })
})