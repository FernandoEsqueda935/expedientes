import React, { useState } from 'react';
import './FormularioRegistro.css';

const QCHAT_test = 'https://www.google.com/' ;
const SCQ_test = 'https://www.google.com/' ;


function FormularioRegistro() {
  const [requierePruebas, setRequierePruebas] = useState(false);

  const manejarCambioPruebas = () => {
    setRequierePruebas(!requierePruebas);
  };

  const manejarRegistro = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para registrar los datos
    alert('Formulario registrado');
  };

  return (
    <div className="formulario-container">
      <h2>Formulario de Registro</h2>
      <form onSubmit={manejarRegistro}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del paciente:</label>
          <input placeholder="Nombre completo" type="text" id="nombre" name="nombre" required />
        </div>

        <div className="form-group">
          <label htmlFor="telefonoTutor">Número telefónico del tutor:</label>
          <input type="tel" id="telefonoTutor" placeholder="Número con lada" name="telefonoTutor" required />
        </div>

        <div className="form-group">
          <label htmlFor="edad">Edad del paciente (años y meses):</label>
          <div className="edad-meses-container">
            <input type="number" id="edad" name="edad" placeholder="Años" min="0" required />
            <input type="number" id="meses" name="meses" placeholder="Meses" min="0" max="11" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="expediente">Número de expediente:</label>
          <input type="number" placeholder="Número de expendiente asociado al paciente" id="expediente" name="expediente" required />
        </div>

        <div className="form-group checkbox">
          <label htmlFor="remitido">
            <input type="checkbox" id="remitido" name="remitido" /> Remitido de otro hospital
          </label>
        </div>

        <div className="form-group checkbox">
          <label htmlFor="requierePruebas">
            <input 
              type="checkbox" 
              id="requierePruebas" 
              name="requierePruebas" 
              onChange={manejarCambioPruebas} 
            /> 
            Requiere hacer pruebas
          </label>
        </div>

        {requierePruebas && (
          <div className="pruebas-container">
            <h3>Pruebas disponibles</h3>
            <li>
              <button type="button" onClick={() => window.open(QCHAT_test, '_blank')}>Prueba Q-CHAT</button>
            </li>
            <li>
              <button type="button" onClick={() => window.open(SCQ_test, '_blank')}>Prueba SCQ</button>
            </li>
          </div>
        )}

        <button type="submit" className="btn-registrar">Registrar</button>
      </form>
    </div>
  );
}

export default FormularioRegistro;
