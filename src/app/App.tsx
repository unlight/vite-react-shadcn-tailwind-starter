import React, { Suspense } from 'react';

import './App.css';
import { DateComponent } from './DateComponent';

export function App() {
  return (
    <React.StrictMode>
      <h4>Hello from app</h4>
      <DateComponent />
    </React.StrictMode>
  );
}
