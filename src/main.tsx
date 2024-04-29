import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import './globals.css';
import './index.css';

const root = createRoot(document.querySelector('#app')!);
root.render(<App />);
