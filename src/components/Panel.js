import React from 'react';
import Meta from './Meta';
import '../styles/Panel.css';
const Panel = ({ metas, marcarMetaCompletada, eliminarMeta }) => {
  const metasCompletadas = metas.filter((meta) => meta.completada);
  const metasPendientes = metas.filter((meta) => !meta.completada);


  return (
    <div className="panel-container">
        <div className='subPanel'>
            <div className="recuadro completadas">
                Completadas: {metasCompletadas.length}
            </div>
            <div className="recuadro pendientes">
                Pendientes: {metasPendientes.length}
            </div>
        </div>
      <ul className="metas-lista">
        {metas.map((meta) => (
          <Meta
            key={meta.id}
            meta={meta}
            marcarMetaCompletada={marcarMetaCompletada}
            eliminarMeta={eliminarMeta}
          />
        ))}
      </ul>
    </div>
  );
};

export default Panel;