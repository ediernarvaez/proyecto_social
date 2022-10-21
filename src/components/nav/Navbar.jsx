import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

import DarkModeSwitch from '../DarkMode/DarkModeSwitch';
import Library from '../assets/svg/library';
import Github from '../assets/svg/github';
import Logout from '../assets/svg/logout';

function Navbar() {
  return (
    <section className="mx-auto px-56 py-4 dark:bg-zinc-900 bg-blue-200">
      <div className="container grid grid-cols-3">
        <div className="flex justify-start items-center col-span-1">
          <Link to="/">
            <h1 className="font-bold text-xl dark:text-white text-black">PS</h1>
          </Link>
        </div>
        <div className="flex flex-row gap-2 justify-end items-center col-span-2 ">
          <DarkModeSwitch />
          <Link to="/formulario">
            <Library
              className="dark:fill-white fill-black"
              data-tip
              data-for="form"
            />
            <ReactTooltip id="form" place="top" effect="solid">
              Registrar Proyecto
            </ReactTooltip>
          </Link>
          <Logout
            className="dark:fill-white fill-black"
            data-tip
            data-for="logout"
          />
          <ReactTooltip id="logout" place="top" effect="solid">
            Cerrar Sesión
          </ReactTooltip>
          <Github
            className="dark:fill-white fill-black"
            data-tip
            data-for="git"
          />
          <ReactTooltip id="git" place="top" effect="solid">
            Git Hub
          </ReactTooltip>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
