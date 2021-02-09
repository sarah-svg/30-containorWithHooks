
global.fetch = require('node-fetch');

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import AllCharacters from './AllCharacters';

describe.only('Main component', () => {
  afterEach(() => cleanup());
  it('tests that loading behavior works as expected', () => {
    render(<MemoryRouter><AllCharacters /></MemoryRouter>);

    const loading = screen.getByText('Loading Characters...');

    return waitFor(() => {
      expect(loading).toHaveTextContent('Loading Characters...');
    });
  });
  // it('test the display', () => {
  //   render(<AllCharacters/>);

  //   // const main = screen.getByTestId('main');
  //   const list = screen.getByText('CHARACTER');
 
  //   return waitFor(() => {
  //     expect(list).not.toThrowError(list);


  //   });


  // });
});
