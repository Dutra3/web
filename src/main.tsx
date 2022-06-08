import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { App } from './App';
import { AuthProveider } from './contexts/auth';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProveider>
      <App />
    </AuthProveider>
  </React.StrictMode>
)
