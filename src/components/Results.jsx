/* eslint-disable react/prop-types */
import React from 'react';

function Results({ res, toggleOpen }) {
  const imagen = `https://drawbeobfozyrwvkabpy.supabase.co/storage/v1/object/public/${res.imagen}`;
  return (
    <>
      <div className="flex justify-between items-start">
        <span className="flex flex-col gap-1">
          <h1 className="text-white text-lg font-normal capitalize">
            {res.nombre_proyecto}
          </h1>
        </span>
        <button
          type="button"
          onClick={toggleOpen}
          className="text-white/80 hover:text-white"
        >
          x
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <span>
          <h1 className="text-white text-md font-normal capitalize">
            Tipo de Proyecto: {res.tipo_proyecto}
          </h1>
        </span>
        <span>
          <img src={imagen} alt="imagen" />
        </span>
      </div>
    </>
  );
}

export default Results;
