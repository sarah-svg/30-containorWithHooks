import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import  manyCharacters  from '../fixtures/manyCharacters.json';
import { MemoryRouter } from 'react-router-dom';
import AllCharacters from './AllCharacters';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(manyCharacters));
  })
);

describe('Main component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  // it('tests that loading behavior works as expected', async() => {
  //   render(<MemoryRouter><AllCharacters /></MemoryRouter>);

  //   const loading = await screen.getByText('Loading Characters...');

  //   return waitFor(() => {
  //     expect(loading).toHaveTextContent('Loading Characters...');
  //   });
  // });
  it('fetches and displays a list of characters', async() => {
    render(
      <MemoryRouter>
        <AllCharacters />
      </MemoryRouter>
    );
    screen.getByText('Loading Characters...');
    const listOfCharacters = await screen.findByTestId('characters');
    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});
