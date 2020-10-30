import React from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { AuthProvider } from './AuthContext';
import { ToastProvider } from './Toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
