import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CssBaseline } from '@mui/material';
import { FirebaseProvider } from './context/FirebaseContext.jsx';
import { CarritoProvider } from './context/CarritoContex.jsx';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <BrowserRouter>
        <FirebaseProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </FirebaseProvider>
      </BrowserRouter>
    </CssBaseline>
  </React.StrictMode>
);
