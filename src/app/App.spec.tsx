import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { App } from './App';

console.log('test', test);

test('renders app component', async () => {
  const screen = render(<App />);
  await waitFor(() => {
    expect(screen.getByText('Hello')).toBeTruthy();
  });
});

test('renders all app html', async () => {
  const screen = render(<App />);
  await waitFor(() => {
    expect(screen.baseElement.outerHTML).toBeTruthy();
  });
});
