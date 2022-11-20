/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { supabase } from '../../clients';

function Results() {
  // get results supabase
  const [formulario, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const { data, error } = await supabase
        .from('formulario')
        .select('*')
        .order('id_formulario', { ascending: false });
      if (error) {
        console.log(error);
      } else {
        setResults(data);
      }
    };
    fetchResults();
  }, []);

  return (
    <section className="text-center flex flex-none justify-center mx-auto lg:mx-[300px] bg-zinc-900 mt-12 rounded-lg shadow-lg shadow-zinc-900/80 mb-12">
      <div className="max-w-sm m-8 overflow-hidden bg-zinc-900 rounded-lg shadow-lg shadow-zinc-900/80 justify-center h-96 w-96">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">GRUPO 1</div>
        </div>
        <div className="max-w-sm rounded overflow-hidden text-white">
          {formulario.map((form) => (
            <div key={form.id_formulario}>
              <div>
                <span>
                  <h2>{form.tipo_proyecto}</h2>
                </span>
                <span>
                  <h2>{form.nombre_proyecto}</h2>
                </span>
                <span>
                  <h2>{form.integrante}</h2>
                </span>
              </div>
              <div>
                <span>
                  <h2>{form.informacion}</h2>
                </span>
                <span>
                  <h2>{form.materiales}</h2>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
