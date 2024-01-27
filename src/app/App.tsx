import React from 'react';

import './App.css';

import { HoverCardDemo } from './HoverCardDemo';

export function App() {
  return (
    <React.StrictMode>
      <main className="flex min-h-screen items-center justify-center">
        <h4>Hello from app</h4>
        <HoverCardDemo />
      </main>
    </React.StrictMode>
  );
}
