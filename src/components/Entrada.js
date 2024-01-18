import React, { useState } from 'react';
import "../styles/Entrada.css";

const Entrada = ({ agregarMeta }) => {
  const [nuevaMeta, setNuevaMeta] = useState('');

  const handleInputChange = (event) => {
    setNuevaMeta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    agregarMeta(nuevaMeta);
    setNuevaMeta('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="entrada-container">
            <input type="text"  placeholder="Nueva meta..." value={nuevaMeta} onChange={handleInputChange} />
            <button type="submit">Agregar</button>
        </div>
    </form>
  );
};

export default Entrada;