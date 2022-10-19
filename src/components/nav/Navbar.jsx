import React from 'react';

import { Link } from 'react-router-dom';

import DarkModeSwitch from '../DarkMode/DarkModeSwitch';
import Library from '../assets/svg/library';
import Github from '../assets/svg/github';
import Logout from '../assets/svg/logout';

function Navbar() {
  return (
    <section className="mx-auto px-56 py-4 dark:bg-zinc-900 bg-yellow-100">
      <div className="container grid grid-cols-3">
        <div className="flex justify-start items-center col-span-1">
          <Link to="/">
            <h1 className="font-bold text-xl dark:text-white text-black">PS</h1>
          </Link>
        </div>
        <div className="flex flex-row gap-2 justify-end items-center col-span-2 ">
          <DarkModeSwitch />
          <Link to="/formulario">
            <Library className="dark:fill-white fill-black" />
          </Link>
          <Logout className="dark:fill-white fill-black" />
          <Github className="dark:fill-white fill-black" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
