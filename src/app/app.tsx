import './app.css';

import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

import { ComboboxDemo } from '@/components/combo-box';
import { HoverCardDemo } from '@/components/hover-card-demo';
import { InputForm } from '@/components/input-form';
import { SonnerDemo } from '@/components/sonner-demo';
import { Toaster } from '@/components/ui/sonner';

export const Route = createFileRoute('/app')({
  component: App,
});

export function App() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center space-y-2">
        <h4>Hello from app</h4>
        <HoverCardDemo />
        <ComboboxDemo />
        <SonnerDemo />
        <InputForm />
      </main>
      <Toaster />
    </>
  );
}
