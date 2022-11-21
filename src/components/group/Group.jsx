/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { supabase } from '../../clients';

import { groups } from '../../constants/groups';
import Results from '../Results';

function Group() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const [result, setResults] = useState([]);

  const fetchResults = async (id) => {
    const { data, error } = await supabase
      .from('formulario')
      .select('*')
      .eq('id_formulario', id)
      .order('id_formulario', { ascending: false });
    if (error) {
      console.log(error);
    } else {
      setResults(data);
      console.log(data);
    }
  };

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  const open = (id) => {
    fetchResults(id);
    toggleOpen();
  };

  const img =
    'https://cdni.iconscout.com/illustration/premium/thumb/meeting-5945294-4911442.png';

  return (
    <>
      <section className="grid lg:justify-center">
        <div className="dark:bg-zinc-900 bg-blue-300 rounded-lg shadow-md shadow-zinc-900 p-8 w-full lg:px-8 lg:w-[800px]">
          <h2 className="text-3xl font-black text-center text-white sm:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-100">
              LISTA DE GRUPOS
            </span>
          </h2>
          <div className="grid grid-cols-4 grid-rows-3 gap-8 justify-center pt-8">
            {/* start */}
            {groups.map((group) => (
              <div
                key={group.id}
                className="col-span-4 lg:col-span-2 bg-zinc-800/40 rounded-lg"
              >
                <span className="flex flex-col lg:flex-row gap-2 items-start p-4 justify-between">
                  <span className="flex flex-col gap-1 items-start">
                    <h1 className="dark:text-zinc-100 text-black font-bold text-xl">
                      {group.nombre}
                    </h1>
                    <h1 className="text-normal font-normal dark:text-zinc-100 text-black text-sm">
                      Haz click para ver el diseño
                    </h1>
                    <a
                      href={group.figma}
                      target="_blank"
                      className="text-normal font-normal dark:text-indigo-400 text-blue-800 text-sm hover:underline"
                      rel="noreferrer"
                    >
                      Ver diseño
                    </a>
                    <button
                      type="button"
                      onClick={() => open(group.id)}
                      className="bg-indigo-400 text-sm px-2 py-1 rounded-md text-white"
                    >
                      Abrir proyecto
                    </button>
                  </span>
                  <span>
                    <img
                      src={img}
                      alt="Meeting Illustration"
                      loading="lazy"
                      className="w-32 h-32 object-cover bg-white rounded-lg"
                      data-tip
                      data-for={group.slug}
                    />
                    <ReactTooltip id={group.slug} place="top" effect="solid">
                      {group.integrantes.map((integrante) => (
                        <ol key={integrante.id}>
                          <li>{integrante.nombre}</li>
                        </ol>
                      ))}
                    </ReactTooltip>
                  </span>
                </span>
              </div>
            ))}
            {/* end */}

            <div className="col-span-1 lg:block hidden" />
          </div>
        </div>
      </section>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50"
            style={{
              backdropFilter: 'blur(5px)'
            }}
          >
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] bg-zinc-900 rounded-md p-8">
              {result.map((res) => (
                <Results res={res} toggleOpen={toggleOpen} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Group;
