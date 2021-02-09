global.fetch = require ('node-fetch');
import React from 'react';
import { cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from 'react-dom';
import ACharacter from './ACharacter';
import { MemoryRouter } from 'react-router-dom';

describe('Containor for just one character display', () => {
  afterEach(() => cleanup());
  it('test the loading behavior', () => {
    render(<MemoryRouter><ACharacter /></MemoryRouter>);

    const loading = screen.getByTestId('loading');
    return waitFor(() => {
      expect(loading).toHaveTextContent('Loading A Character');
    });
  });
});
