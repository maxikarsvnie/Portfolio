import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { PaginaActual } from './App.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaActual />
  </StrictMode>
);