/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Button from '../components/buttons/Button';
import { supabase } from '../clients';

function FormLinkPage() {
  const [figma, setFigma] = useState('');

  const grupos = [
    {
      id: 1,
      nombre: 'Grupo 1'
    },
    {
      id: 2,
      nombre: 'Grupo 2'
    },
    {
      id: 3,
      nombre: 'Grupo 3'
    },
    {
      id: 4,
      nombre: 'Grupo 4'
    },
    {
      id: 5,
      nombre: 'Grupo 5'
    }
  ];

  const [group, setGrupo] = useState('');

  const fetchResults = async () => {
    const { data, error } = await supabase
      .from('form_figma')
      .insert([{ grupo: group, link_figma_dos: figma }])
      .then((res) => {
        console.log(res);
      });
    if (error) console.log(error);
    console.log(data);
  };

  return (
    <section className="mx-auto lg:mx-[500px] bg-zinc-900 mt-12 rounded-lg shadow-lg shadow-zinc-900/80 mb-12">
      <div className="px-20 py-8 grid grid-cols-2 gap-8">
        <span className=" pb-8 capitalize tracking-normal col-span-2 font-bold text-white text-3xl text-center">
          Mi link
        </span>
        <div className="col-span-1 flex flex-col gap-8 justify-center">
          <span className="flex flex-col gap-2">
            <label className="font-normal text-white text-md">
              Tipo de Proyecto:
            </label>
            <select className="outline-none bg-zinc-800 text-white text-md rounded-md px-4 py-2 shadow-lg shadow-zinc-900/80">
              <option disabled value="0">
                Seleccione
              </option>
              {grupos.map((item, key) => (
                <option
                  key={item.id}
                  value={item.nombre}
                  onChange={(e) => {
                    setGrupo(e.target.value);
                  }}
                >
                  {item.nombre}
                </option>
              ))}
            </select>
          </span>
          <span className="flex flex-col gap-2">
            <label className="font-normal text-white text-md">
              Link de Figma:
            </label>
            <input
              type="text"
              value={figma}
              onChange={(e) => setFigma(e.target.value)}
              placeholder="https://www.figma.com/file/6TjeBmO"
              className="outline-none bg-zinc-800 text-white text-md rounded-md px-4 py-2 shadow-lg shadow-zinc-900/80"
            />
          </span>
        </div>
        <span className="col-span-2 flex flex-row gap-4 justify-center">
          <Button
            className="bg-black px-8 py-3 text-white text-sm rounded-md shadow-md shadow-black/80"
            type="submit"
            text="Guardar Proyecto"
            onClick={() => {
              fetchResults();
            }}
          />
        </span>
      </div>
    </section>
  );
}

export default FormLinkPage;
