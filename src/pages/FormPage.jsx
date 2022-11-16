/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Button from '../components/buttons/Button';
import FormImg from '../components/forms/FormImg';
// import FormText from '../components/forms/FormText';
import Hide from '../components/assets/svg/hide';
import Group from '../components/assets/svg/group';
import { supabase } from '../clients';

function FormPage() {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(true);

  const [type, setType] = useState('');
  console.log(type);
  const [name, setName] = useState('');
  console.log(name);
  const [figma, setFigma] = useState('');
  console.log(figma);
  const [description, setDescription] = useState('');
  console.log(description);

  const [input, setInput] = useState('');
  const [integrantes, setIntegrantes] = useState([]);
  console.log(integrantes);

  const tipo = [
    {
      id: 1,
      nombre: 'Carro'
    },
    {
      id: 2,
      nombre: 'Barco'
    },
    {
      id: 3,
      nombre: 'Avión'
    }
  ];

  const test = 'fsfad';

  const clearImage = () => {
    setImage(null);
  };

  useEffect(() => {
    if (integrantes.length > 5) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }, [integrantes]);

  const fetchResults = async () => {
    const { data, error } = await supabase
      .from('formulario')
      .insert([
        {
          tipo_proyecto: type,
          nombre_proyecto: name,
          informacion: description,
          integrante: integrantes,
          link_figma: figma,
          imagen: image
        }
      ])
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
          Mi proyecto
        </span>
        <div className="col-span-1 flex flex-col gap-8 justify-center">
          <span className="flex flex-col gap-2">
            <label className="font-normal text-white text-md">
              Tipo de Proyecto:
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="outline-none bg-zinc-800 text-white text-md rounded-md px-4 py-2 shadow-lg shadow-zinc-900/80"
            >
              <option disabled value="0">
                Seleccione
              </option>
              {tipo.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.nombre}
                </option>
              ))}
            </select>
          </span>
          <span className="flex flex-col gap-2">
            <label className="font-normal text-white text-md">
              Nombre del Proyecto:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Ej: "Holndes herrante"'
              className="outline-none bg-zinc-800 text-white text-md rounded-md px-4 py-2 shadow-lg shadow-zinc-900/80"
            />
          </span>
          <span className="grid grid-cols-2 gap-2">
            {!status && (
              <h1 className="text-red-500 text-xs col-span-2">
                El maximo de integrantes es 6!
              </h1>
            )}
            {status && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setIntegrantes([
                      ...integrantes,
                      { id: Date.now(), name: input }
                    ]);
                    setInput('');
                  }}
                  className="outline-none col-span-1 flex flex-row gap-2 p-2 border-2 border-zinc-700 bg-zinc-700/50 cursor-pointer rounded-lg w-44"
                >
                  <Group className="fill-white" />
                  <h1 className="text-white font-normal text-sm">
                    Agregar integrante
                  </h1>
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nombre del integrante"
                  className="outline-none col-span-2 bg-zinc-800 text-white text-md rounded-md px-4 py-2 shadow-lg shadow-zinc-900/80"
                />
              </>
            )}

            <hr className="col-span-2 border-[1px] border-zinc-700 rounded-lg" />
            <span className="text-center text-white items-center justify-center col-span-2">
              Lista de Integrantes:
            </span>
            <span className="col-span-2 flex justify-center">
              <div className="bg-zinc-800/90 rounded-sm h-34 w-44 p-4">
                {integrantes.map((item) => (
                  <span>
                    <li className="text-white text-sm capitalize">
                      {item.name}
                    </li>
                  </span>
                ))}
                {integrantes.length === 0 && (
                  <h1 className="text-white text-xs text-center capitalize">
                    No hay integrantes
                  </h1>
                )}
              </div>
            </span>
          </span>
          <span className="flex flex-col gap-2">
            <label className="font-normal text-white text-md">
              Descipción:
            </label>
            {/* mas tarde */}
            <textarea
              style={{
                resize: 'none'
              }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descripción del proyecto"
              rows="4"
              className="outline-none bg-zinc-800 text-white text-md rounded-md px-4 py-2 shadow-lg shadow-zinc-900/80"
            />
          </span>
        </div>
        <span className="col-span-1 flex flex-col gap-8">
          <div className="flex flex-col justify-start items-center col-span-1 gap-4">
            <span className="p-8 rounded-md bg-zinc-700/10 w-full h-56 border-2 border-zinc-700 border-dashed flex items-center justify-center">
              {!image ? (
                <Hide className="fill-zinc-700" />
              ) : (
                <img
                  src={image}
                  alt="imagen"
                  className="w-full h-full object-cover rounded-md"
                />
              )}
            </span>
            <span className="flex flex-col gap-4">
              <FormImg
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
                type="file"
                id="file"
                className="flex flex-row gap-2 items-center fill-white text-white text-sm cursor-pointer bg-black p-2 rounded-md w-40 justify-center shadow-lg shadow-black"
                text="Subir Imagen"
              />
              {!image ? (
                <></>
              ) : (
                <button
                  onClick={clearImage}
                  className="font-normal text-xs text-white underline"
                  type="button"
                >
                  Borrar imagen
                </button>
              )}
            </span>
          </div>
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
        </span>
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

export default FormPage;
