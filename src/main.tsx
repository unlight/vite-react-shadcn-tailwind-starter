import './globals.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';

const root = createRoot(document.querySelector('#app')!);
root.render(<App />);
