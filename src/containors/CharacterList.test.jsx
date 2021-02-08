import React from 'react';
import { render, screen, waitFor  } from '@testing-library/react';



describe('All characters', () => {
  it('displays the character containor', async() => {
    render();
    screen.getByText('Loading');

    const ul = await screen.findAllByTestId('');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });

  });
});
