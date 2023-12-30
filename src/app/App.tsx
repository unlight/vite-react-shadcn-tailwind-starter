import React from 'react';

import './App.css';
import { DatePickerDemo } from './DatePickerDemo';
import { DateComponent } from './DateComponent';

export function App() {
  return (
    <React.StrictMode>
      <h4>Hello from app</h4>
      <DatePickerDemo />
      <DateComponent />
    </React.StrictMode>
  );
}
