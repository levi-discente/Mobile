import React from 'react';
import Routes from './navigation';
import { ContatoProvider } from './context/ContatoContext';
import { AuthProvider } from './context/AuthContext';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <AuthProvider >
      <ContatoProvider>
        <Routes />
        <Toast />
      </ContatoProvider>
    </AuthProvider>
  );
}

