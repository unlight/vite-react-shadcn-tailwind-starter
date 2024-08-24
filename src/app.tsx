import './app.css';

import React from 'react';

import { Toaster } from '@/components/ui/sonner';

import { ComboboxDemo } from './components/combo-box';
import { HoverCardDemo } from './components/hover-card-demo';
import { InputForm } from './components/input-form';
import { SonnerDemo } from './components/sonner-demo';

export function App() {
  return (
    <React.StrictMode>
      <main className="flex min-h-screen flex-col items-center justify-center space-y-2">
        <h4>Hello from app</h4>
        <HoverCardDemo />
        <ComboboxDemo />
        <SonnerDemo />
        <InputForm />
      </main>
      <Toaster />
    </React.StrictMode>
  );
}
