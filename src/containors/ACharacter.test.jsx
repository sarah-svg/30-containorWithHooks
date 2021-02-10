import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ACharacter from './ACharacter';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import  character from '../fixtures/character.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/2', (req, res, ctx) => {
    return res(ctx.json(character));
  })
);

describe('Containor for just one character display', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('test the loading behavior', () => {
    // eslint-disable-next-line max-len
    render(<MemoryRouter><ACharacter match={{ params: { id: '2' } }}/></MemoryRouter>);

    screen.getByTestId('loading');
    return waitFor(() => {
      screen.getByText('Morty Smith');
      screen.getByText('Human');
      screen.getByText('Alive');
    });
  });
});
