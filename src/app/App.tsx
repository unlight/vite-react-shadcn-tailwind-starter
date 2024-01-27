import React from 'react';
import { Toaster } from '@/components/ui/sonner';

import './App.css';

import { HoverCardDemo } from './HoverCardDemo';
import { SonnerDemo } from './SonnerDemo';

export function App() {
  return (
    <React.StrictMode>
      <main className="flex min-h-screen items-center justify-center">
        <h4>Hello from app</h4>
        <HoverCardDemo />
        <SonnerDemo />
      </main>
      <Toaster />
    </React.StrictMode>
  );
}
