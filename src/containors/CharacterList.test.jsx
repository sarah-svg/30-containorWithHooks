
global.fetch = require('node-fetch');

import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import AllCharacters from './AllCharacters';

describe('Main component', () => {
  afterEach(() => cleanup());
  it('tests that loading behavior works as expected', () => {
    render(<AllCharacters />);

    const loading = screen.getByTestId('loading');

    return waitFor(() => {
      expect(loading).toHaveTextContent('Loading Characters...');
    });
  });
});
