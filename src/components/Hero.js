import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-96 overflow-hidden hero-gradient">
      <div className="absolute inset-0">
        <img
          src="/images/rae-gymnasium-building.jpg"
          alt="Rae Gümnaasium hoone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            RAE GÜMNAASIUM
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;