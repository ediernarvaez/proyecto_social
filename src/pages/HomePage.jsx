/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Group from '../components/group/Group';
// import SliderImg from '../components/slider/SliderImg';

function HomePage() {
  return (
    <section className="container mx-auto mb-20 p-4 lg:p-10 bg-white dark:bg-zinc-800">
      {/* <div>
        <SliderImg />
      </div> */}
      <div className="text-center p-8 m-2">
        <Link to="/vista">
          <button
            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            data-tip
            data-for="car"
          >
            Proyecto Del Carro
          </button>
        </Link>
        <ReactTooltip id="car" place="top" effect="solid">
          Ver Los Proyectos De Los Carros
        </ReactTooltip>
      </div>
      <div>
        <Group />
      </div>
    </section>
  );
}

export default HomePage;
