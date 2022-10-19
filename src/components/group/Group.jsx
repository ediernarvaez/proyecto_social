/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import GroupIcon from '../assets/svg/GroupIcon';

function Group() {
  return (
    <section className="flex flex-col pt-20 bg-white dark:bg-zinc-800 px-16 gap-8">
      <h1 className="flex text-zinc-800 dark:text-zinc-100 text-4xl capitalize font-bold justify-start">
        Grupos
      </h1>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-3 rounded-md bg-yellow-100 dark:bg-zinc-700 bg-dark-200 shadow-lg">
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex justify-start p-8 relative">
              <span className="flex flex-col gap-7">
                <p className="text-zinc-900 uppercase tracking-widest dark:text-zinc-100 font-bold text-3xl pt-20">
                  GRUPO UNO
                </p>
                <span className="flex justify-start">
                  <Link to="/watchProjets">
                    <button
                      type="button"
                      className="bg-sky-500 rounded-md px-10 py-2"
                    >
                      <h1 className="text-zinc-50 font-bold text-xs">
                        Ver más
                      </h1>
                    </button>
                  </Link>
                </span>
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <GroupIcon
                alt="Libros hasta un 30% off"
                className="rounded-r-md object-cover mt-5"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-md bg-yellow-100 dark:bg-zinc-700 bg-dark-200 shadow-lg">
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex justify-start p-8 relative">
              <span className="flex flex-col gap-7">
                <p className="text-zinc-900 uppercase tracking-widest dark:text-zinc-100 font-bold text-3xl pt-20">
                  GRUPO DOS
                </p>
                <span className="flex justify-start">
                  <Link to="/watchProjets">
                    <button
                      type="button"
                      className="bg-sky-500 rounded-md px-10 py-2"
                    >
                      <h1 className="text-zinc-50 font-bold text-xs">
                        Ver más
                      </h1>
                    </button>
                  </Link>
                </span>
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <GroupIcon
                alt="Libros hasta un 30% off"
                className="rounded-r-md object-cover mt-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-3 rounded-md bg-yellow-100 dark:bg-zinc-700 bg-dark-200 shadow-lg">
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex justify-start p-8 relative">
              <span className="flex flex-col gap-7">
                <p className="text-zinc-900 uppercase tracking-widest dark:text-zinc-100 font-bold text-3xl pt-20">
                  GRUPO TRES
                </p>
                <span className="flex justify-start">
                  <Link to="/watchProjets">
                    <button
                      type="button"
                      className="bg-sky-500 rounded-md px-10 py-2"
                    >
                      <h1 className="text-zinc-50 font-bold text-xs">
                        Ver más
                      </h1>
                    </button>
                  </Link>
                </span>
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <GroupIcon
                alt="Libros hasta un 30% off"
                className="rounded-r-md object-cover mt-5"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-md bg-yellow-100 dark:bg-zinc-700 bg-dark-200 shadow-lg">
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex justify-start p-8 relative">
              <span className="flex flex-col gap-7">
                <p className="text-zinc-900 uppercase tracking-widest dark:text-zinc-100 font-bold text-3xl pt-20">
                  GRUPO CUATRO
                </p>
                <span className="flex justify-start">
                  <Link to="/watchProjets">
                    <button
                      type="button"
                      className="bg-sky-500 rounded-md px-10 py-2"
                    >
                      <h1 className="text-zinc-50 font-bold text-xs">
                        Ver más
                      </h1>
                    </button>
                  </Link>
                </span>
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <GroupIcon
                alt="Libros hasta un 30% off"
                className="rounded-r-md object-cover mt-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto dark:bg-zinc-700 shadow-lg rounded-md p-4">
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex justify-start p-8 relative">
            <span className="flex flex-col gap-7">
              <p className="text-zinc-900 uppercase tracking-widest dark:text-zinc-100 font-bold text-3xl pt-20">
                GRUPO QUINTO
              </p>
              <span className="flex justify-start">
                <Link to="/watchProjets">
                  <button
                    type="button"
                    className="bg-sky-500 rounded-md px-10 py-2"
                  >
                    <h1 className="text-zinc-50 font-bold text-xs">Ver más</h1>
                  </button>
                </Link>
              </span>
            </span>
          </div>
          <div className="col-span-1 flex justify-end">
            <GroupIcon
              alt="Libros hasta un 30% off"
              className="rounded-r-md object-cover mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Group;
