/* eslint-disable react/prop-types */
import React from 'react';

function Results({ res, toggleOpen }) {
  const imagen = `https://drawbeobfozyrwvkabpy.supabase.co/storage/v1/object/public/${res.imagen}`;

  // const test = res.integrante.split('[,]');

  const jsonTest = JSON.parse(res.integrante);
  console.log(jsonTest);
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
          <h1 className="text-white text-md font-normal capitalize">
            Integrantes:
          </h1>
          <h1 className="text-white/80 text-md font-normal capitalize">
            {/* {jsonTest} */}
            {jsonTest.map((integrante) => (
              <li key={integrante.id}>{integrante.name}</li>
            ))}
          </h1>
        </span>
        <span className="flex flex-col gap-2">
          <img
            src={imagen}
            alt="imagen"
            className="rounded-lg w-full h-64 object-cover object-center"
          />
        </span>
        <span>
          <p className="text-white/80">{res.informacion}</p>
          <h1 className="text-white text-md font-normal capitalize">
            Materiales:
          </h1>
          <p className="text-white/80">{res.materiales}</p>
        </span>
      </div>
    </>
  );
}

export default Results;
