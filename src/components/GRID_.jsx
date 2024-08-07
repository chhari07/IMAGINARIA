import React, { useState } from 'react';

import Grid from './Grid';
import Grid2 from './Grid2';
import Grid3 from './Grid3';
import Grid4 from './Grid4';
import Grid5 from './Grid5';
import Grid6 from './Grid6';
import Grid7 from './Grid7';

const GRID_ = () => {
  const [gridType, setGridType] = useState('Grid');

  const renderGrid = () => {
    switch (gridType) {
      case 'Grid':
        return <Grid />;
      case 'Grid2':
        return <Grid2 />;
      case 'Grid3':
        return <Grid3 />;
      case 'Grid4':
       return <Grid4 />;
      case 'Grid5':
         return <Grid5 />;
      case 'Grid6':
         return <Grid6 />;
      case 'Grid7':
        return <Grid7 />;   
         
      default:
        return <Grid />;
    }
  };

  return (
    <div className="App text-center   bg-white"  >
      <div className="my-4 bg-white">
      <div>  
    
     
     
    
    <div class="w-full"  >
  <div class="relative right-0">
    <ul class="relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60" data-tabs="tabs" role="list">
    <li className="z-30 flex-auto text-center">
                    <button onClick={() => setGridType('Grid')} className="overflow-hidden relative w-32 p-2 mt-3 h-12 bg-black text-white border-none rounded-md text-sm font-bold cursor-pointer z-10 group">
                      CARS
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">CARS</span>
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button onClick={() => setGridType('Grid2')} className="overflow-hidden relative w-32 p-2 mt-3 h-12 bg-black text-white border-none rounded-md text-sm font-bold cursor-pointer z-10 group">
                      DRAGON BALL Z
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">DRAGON BALL Z</span>
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button onClick={() => setGridType('Grid3')} className="overflow-hidden relative w-32 p-2 mt-3 h-12 bg-black text-white border-none rounded-md text-sm font-bold cursor-pointer z-10 group">
                      INDIAN ARMED FORCES
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">INDIAN ARMED FORCES</span>
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button onClick={() => setGridType('Grid4')} className="overflow-hidden relative w-32 p-2 mt-3 h-12 bg-black text-white border-none rounded-md text-sm font-bold cursor-pointer z-10 group">
                      VIRAT KOHLI
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">VIRAT KOHLI</span>
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button onClick={() => setGridType('Grid5')} className="overflow-hidden relative w-32 p-2 mt-3 h-12 bg-black text-white border-none rounded-md text-sm font-bold cursor-pointer z-10 group">
                      COMIC HEROES
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">COMIC HEROES</span>
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button onClick={() => setGridType('Grid6')} className="overflow-hidden relative w-32 p-2 mt-3 h-12 bg-black text-white border-none rounded-md text-sm font-bold cursor-pointer z-10 group">
                      INDIAN CULTURE
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">INDIAN CULTURE</span>
                    </button>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <button onClick={() => setGridType('Grid7')} className="overflow-hidden relative w-32 p-2 h-12 mt-3 bg-black text-white border-none rounded-md text-sm font-bold cursor-pointer z-10 group">
                      ISRO LAUNCH
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">ISRO LAUNCH</span>
                    </button>
                  </li>
    </ul>
  </div>
</div> 






        
       
              </div>

      </div>
      <div className="grid-container">
        {renderGrid()}
      </div>
    </div>
  );
};

export default GRID_;