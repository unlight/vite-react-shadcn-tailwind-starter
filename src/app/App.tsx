import React from 'react';

import './App.css';

import { HoverCardDemo } from './HoverCardDemo';

export function App() {
  return (
    <React.StrictMode>
      <main className="flex items-center justify-center min-h-screen">
        <h4>Hello from app</h4>
        <HoverCardDemo />
      </main>
    </React.StrictMode>
  );
}
