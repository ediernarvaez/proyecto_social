import React from 'react';
import Button from '../components/buttons/Button';
import FormImg from '../components/forms/FormImg';

function HomePage() {
  return (
    <div>
      HomePage
      <Button
        className="bg-slate-800 p-2 text-white"
        type="button"
        text="boton uno"
      />
      <div className="w-[200px]">
        <FormImg
          htmlFor="file"
          className="flex items-center justify-center flex-row gap-2 bg-yellow-400 p-2 rounded-lg font-bold text-lg"
          text="Subir imagen"
          type="file"
          id="file"
        />
      </div>
    </div>
  );
}

export default HomePage;
