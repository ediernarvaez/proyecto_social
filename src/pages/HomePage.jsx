import React from 'react';
import Group from '../components/group/Group';
// import SliderImg from '../components/slider/SliderImg';

function HomePage() {
  return (
    <section className="container mx-auto mb-20 p-4 lg:p-10 bg-white dark:bg-zinc-800">
      {/* <div>
        <SliderImg />
      </div> */}
      <div>
        <Group />
      </div>
    </section>
  );
}

export default HomePage;
