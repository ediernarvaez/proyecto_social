import React from 'react';
import CopyRight from '../assets/svg/CopyRight';

import Facebook from '../assets/svg/facebook';
import Instagram from '../assets/svg/instagram';
import Whatsapp from '../assets/svg/whatsapp';

function Footer() {
  return (
    <footer className="bg-light-100 dark:bg-zinc-900 bg-yellow-100 py-10">
      <div className="container mx-auto grid grid-cols-6 gap-8 xl:gap-40 pt-10 pb-8 px-4">
        <div className="col-span-6 xl:col-span-2 flex flex-col">
          <h1 className="dark:text-white text-black font-bold tracking-widest uppercase text-sm">
            Contáctanos
          </h1>
          <br />
          {/* <p className="dark:text-white text-black text-sm">
            Términos & Condiciones
          </p> */}
          {/* <p className="dark:text-white text-black text-sm">Envíos</p> */}
        </div>
        <div className="col-span-6 xl:col-span-2 flex flex-col">
          <h1 className="dark:text-white text-black font-bold tracking-widest uppercase text-sm">
            copyright
          </h1>
          <br />
          <CopyRight className="dark:fill-white fill-black dark:text-white text-black " />
          {/* <p className="dark:text-white text-black text-sm">
            Suscríbete para recibir lanzamientos, descuentos, y contenido curado
            para nuestros lectores.
          </p> */}
        </div>
        <div className="col-span-6 xl:col-span-2 flex flex-col">
          <h1 className="dark:text-white text-black font-bold tracking-widest uppercase text-sm">
            SÍGUENOS
          </h1>
          {/* <br /> */}
          {/* <p className="dark:text-white text-black text-sm">
            Síguenos en nuestras redes sociales
          </p> */}
          <div className="flex flex-row pt-4">
            <span className="rounded-l-lg border-2 border-zinc-300 dark:border-zinc-800 p-4 ">
              <Facebook className="dark:fill-white fill-black dark:text-white text-black" />
            </span>
            <span className="border-l-0 border-r-0 border-2 border-zinc-300 dark:border-zinc-800 p-4">
              <Instagram className="dark:fill-white fill-black dark:text-white text-black" />
            </span>
            <span className="rounded-r-lg border-2 border-zinc-300 dark:border-zinc-800 p-4">
              <Whatsapp className="dark:fill-white fill-black dark:text-white text-black" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
