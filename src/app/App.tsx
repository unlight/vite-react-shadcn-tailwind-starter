import './App.css';

import React from 'react';

import { Toaster } from '@/components/ui/sonner';

import { ComboboxDemo } from './combo-box';
import { HoverCardDemo } from './HoverCardDemo';
import { InputForm } from './InputForm';
import { SonnerDemo } from './SonnerDemo';

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
