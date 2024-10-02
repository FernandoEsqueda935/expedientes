import React from 'react';
import ReactDOM from 'react-dom/client'; // Si usas React 18
import './index.css'; // Aquí puedes tener tus estilos globales
import App from './App'; // Importa tu componente App
import './App.css';

// Crea el root en el elemento con id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
