import React from 'react';
import { Toaster } from '@/components/ui/sonner';

import './App.css';

import { HoverCardDemo } from './HoverCardDemo';
import { SonnerDemo } from './SonnerDemo';
import { InputForm } from './InputForm';

export function App() {
  return (
    <React.StrictMode>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h4>Hello from app</h4>
        <HoverCardDemo />
        <SonnerDemo />
        <InputForm />
      </main>
      <Toaster />
    </React.StrictMode>
  );
}
