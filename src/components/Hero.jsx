import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2022/05/11/116679-708909908_large.mp4"
          type="video/mp4"
        />
       
      </video>
      <div className="relative z-10 flex items-center justify-center min-h-screen bg-opacity-60 bg-black">
        <div className="text-neutral-content text-center max-w-md">
       
      
          <div className="flex items-center justify-center p-5">
          <h1 className="text-7xl font-bold">IMAGINARIA</h1>
        
          </div>
          <p className="text-2xl font-bold">just imagine</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
