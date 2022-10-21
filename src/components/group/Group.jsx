/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Group() {
  const img =
    'https://cdni.iconscout.com/illustration/premium/thumb/meeting-5945294-4911442.png';

  return (
    <section className="grid lg:justify-center">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md shadow-zinc-900 p-8 w-full lg:px-8 lg:w-[800px]">
        <h2 className="text-3xl font-black text-center text-white sm:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-100">
            LISTA DE GRUPOS
          </span>
        </h2>
        <div className="grid grid-cols-4 grid-rows-3 gap-8 justify-center pt-8">
          <div className="col-span-4 lg:col-span-2 bg-zinc-800/40 rounded-lg">
            <span className="flex flex-col lg:flex-row gap-2 items-start p-4 justify-between">
              <span>
                <h1 className="dark:text-zinc-100 text-black font-bold text-xl">
                  Grupo 1
                </h1>
                <h1 className="text-normal font-normal dark:text-zinc-100 text-black text-sm">
                  Haz click para ver el diseño
                </h1>
                <a
                  href="https://www.figma.com/proto/6TjeBmOPtaf0xTbPwcgpRE/proyecto_social?page-id=0%3A1&node-id=1%3A2&viewport=266%2C161%2C0.33&scaling=scale-down"
                  target="_blank"
                  className="text-normal font-normal dark:text-indigo-400 text-blue-800 text-sm hover:underline"
                  rel="noreferrer"
                >
                  Ver diseño
                </a>
              </span>
              <span>
                <img
                  src={img}
                  alt="Meeting Illustration"
                  loading="lazy"
                  className="w-32 h-32 object-cover bg-white rounded-lg"
                />
              </span>
            </span>
          </div>
          <div className="col-span-4 lg:col-span-2 bg-zinc-800/40 rounded-lg">
            <span className="flex flex-col lg:flex-row gap-2 items-start p-4 justify-between">
              <span>
                <h1 className="dark:text-zinc-100 text-black font-bold text-xl">
                  Grupo 2
                </h1>
                <h1 className="text-normal font-normal dark:text-zinc-100 text-black text-sm">
                  Haz click para ver el diseño
                </h1>
                <a
                  href="https://www.figma.com/proto/6TjeBmOPtaf0xTbPwcgpRE/proyecto_social?page-id=0%3A1&node-id=1%3A2&viewport=266%2C161%2C0.33&scaling=scale-down"
                  target="_blank"
                  className="text-normal font-normal dark:text-indigo-400 text-blue-800 text-sm hover:underline"
                  rel="noreferrer"
                >
                  Ver diseño
                </a>
              </span>
              <span>
                <img
                  src={img}
                  alt="Meeting Illustration"
                  loading="lazy"
                  className="w-32 h-32 object-cover bg-white rounded-lg"
                />
              </span>
            </span>
          </div>
          <div className="col-span-4 lg:col-span-2 bg-zinc-800/40 rounded-lg">
            <span className="flex flex-col lg:flex-row gap-2 items-start p-4 justify-between">
              <span>
                <h1 className="dark:text-zinc-100 text-black font-bold text-xl">
                  Grupo 3
                </h1>
                <h1 className="text-normal font-normal dark:text-zinc-100 text-black text-sm">
                  Haz click para ver el diseño
                </h1>
                <a
                  href="https://www.figma.com/proto/6TjeBmOPtaf0xTbPwcgpRE/proyecto_social?page-id=0%3A1&node-id=1%3A2&viewport=266%2C161%2C0.33&scaling=scale-down"
                  target="_blank"
                  className="text-normal font-normal dark:text-indigo-400 text-blue-800 text-sm hover:underline"
                  rel="noreferrer"
                >
                  Ver diseño
                </a>
              </span>
              <span>
                <img
                  src={img}
                  alt="Meeting Illustration"
                  loading="lazy"
                  className="w-32 h-32 object-cover bg-white rounded-lg"
                />
              </span>
            </span>
          </div>
          <div className="col-span-4 lg:col-span-2 bg-zinc-800/40 rounded-lg">
            <span className="flex flex-col lg:flex-row gap-2 items-start p-4 justify-between">
              <span>
                <h1 className="dark:text-zinc-100 text-black font-bold text-xl">
                  Grupo 4
                </h1>
                <h1 className="text-normal font-normal dark:text-zinc-100 text-black text-sm">
                  Haz click para ver el diseño
                </h1>
                <a
                  href="https://www.figma.com/proto/6TjeBmOPtaf0xTbPwcgpRE/proyecto_social?page-id=0%3A1&node-id=1%3A2&viewport=266%2C161%2C0.33&scaling=scale-down"
                  target="_blank"
                  className="text-normal font-normal dark:text-indigo-400 text-blue-800 text-sm hover:underline"
                  rel="noreferrer"
                >
                  Ver diseño
                </a>
              </span>
              <span>
                <img
                  src={img}
                  alt="Meeting Illustration"
                  loading="lazy"
                  className="w-32 h-32 object-cover bg-white rounded-lg"
                />
              </span>
            </span>
          </div>
          <div className="col-span-1 lg:block hidden" />
          <div className="col-span-4 lg:col-span-2 bg-zinc-800/40 rounded-lg">
            <span className="flex flex-col lg:flex-row gap-2 items-start p-4 justify-between">
              <span>
                <h1 className="dark:text-zinc-100 text-black font-bold text-xl">
                  Grupo 5
                </h1>
                <h1 className="text-normal font-normal dark:text-zinc-100 text-black text-sm">
                  Haz click para ver el diseño
                </h1>
                <a
                  href="https://www.figma.com/proto/6TjeBmOPtaf0xTbPwcgpRE/proyecto_social?page-id=0%3A1&node-id=1%3A2&viewport=266%2C161%2C0.33&scaling=scale-down"
                  target="_blank"
                  className="text-normal font-normal dark:text-indigo-400 text-blue-800 text-sm hover:underline"
                  rel="noreferrer"
                >
                  Ver diseño
                </a>
              </span>
              <span>
                <img
                  src={img}
                  alt="Meeting Illustration"
                  loading="lazy"
                  className="w-32 h-32 object-cover bg-white rounded-lg"
                />
              </span>
            </span>
          </div>
          <div className="col-span-1 lg:block hidden" />
        </div>
      </div>
    </section>
  );
}

export default Group;
