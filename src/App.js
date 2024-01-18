import React, { useState } from 'react';
import Entrada from './components/Entrada';
import Panel from './components/Panel';
import './App.css';

const App = () => {
  const [metas, setMetas] = useState([]);

  const agregarMeta = (nuevaMeta) => {
    const nuevaMetaObj = {
      id: Date.now(),
      texto: nuevaMeta,
      completada: false,
    };
    setMetas([...metas, nuevaMetaObj]);
  };

  const marcarMetaCompletada = (metaId) => {
    const nuevasMetas = metas.map((meta) => {
      if (meta.id === metaId) {
        return { ...meta, completada: true };
      }
      return meta;
    });
    setMetas(nuevasMetas);
  };

  const eliminarMeta = (metaId) => {
    const nuevasMetas = metas.filter((meta) => meta.id !== metaId);
    setMetas(nuevasMetas);
  };

  return (
    <div className="app">
      <h1>Mis Metas</h1>
      <div className="container">
        <div className='entrada'>
        <Entrada agregarMeta={agregarMeta} />
        </div>
        <div className='Panel'>
        <Panel
          metas={metas}
          marcarMetaCompletada={marcarMetaCompletada}
          eliminarMeta={eliminarMeta}
        />
        </div>
      </div>
      
    </div>
  );
};

export default App;