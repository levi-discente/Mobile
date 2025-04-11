import React from 'react';
import Routes from './navigation';
import { ContatoProvider } from './context/ContatoContext';

export default function App() {
  return (
    <ContatoProvider>
      <Routes />
    </ContatoProvider>
  );
}

