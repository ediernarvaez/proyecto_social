/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from '../components/buttons/Button';
import FormImg from '../components/forms/FormImg';
import FormText from '../components/forms/FormText';

function FormPage() {
  return (
    <section className="mx-auto px-56 py-20 dark:bg-zinc-800 bg-zinc-200">
      <div className="border container grid grid-cols-1 ">
        <div className="dark:border-zinc-800 border-zinc-200 p-5 mt-5 One-dimen">
          <label className="dark:text-white text-black pl-1 p-5">
            Tipo De Proyecto:
          </label>
          <select>
            <option value="bar">Por Que Mi Barco No Navega</option>
            <option value="car">Carro</option>
            <option value="avi">Avion</option>
          </select>
          <label className="dark:text-white text-black pl-1 p-5">
            Nombre Del Poyecto:
          </label>
          <FormText
            className=""
            id="nombre"
            type="text"
            placeholder="Holendes Herrante"
          />
          <label className="dark:text-white text-black pl-1 p-5">
            Integrantes:
          </label>
          <FormText
            className=""
            id="integrantes"
            type="text"
            placeholder="juan"
          />
          <label className="dark:text-white text-black pl-1 p-5">
            Descripción Del Poyecto:
          </label>
          <textarea
            className=""
            id="descripcion"
            type="text"
            placeholder="Descripcion"
          />
          <label className="dark:text-white text-black pl-1 p-5">
            Link De Figma:
          </label>
          <FormText
            className=""
            id="figma"
            type="text"
            placeholder="https://www.figma.com/..."
          />
          <div className="w-[200px] mt-5">
            <FormImg
              htmlFor="file"
              className="flex items-center justify-center flex-row gap-2 bg-yellow-400 p-2 rounded-lg font-bold text-lg"
              text="Subir Imagen"
              type="file"
              id="file"
            />
          </div>
          <Button
            className="bg-slate-800 p-2 text-white w-20 mt-5"
            type="button"
            text="Guardar"
          />
        </div>
      </div>
    </section>
  );
}

export default FormPage;
