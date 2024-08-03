import React, { useState } from 'react';

import Grid from './Grid';
import Grid2 from './Grid2';
import Grid3 from './Grid3';
import Grid4 from './Grid4';
import Grid5 from './Grid5';

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
      default:
        return <Grid />;
    }
  };

  return (
    <div className="App text-center   bg-black"  >
      <div className="my-4 bg-black">
      <div>  
     <div class="grid grid-cols-3 gap-5">     
     <div class="border-b border-gray-200 bg-black">
  <nav class="flex justify-center   ml-44 pl-40    gap-x-8" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
    <button onClick={() => setGridType('Grid')} type="button" class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active" id="horizontal-alignment-item-1" aria-selected="true" data-hs-tab="#horizontal-alignment-1" aria-controls="horizontal-alignment-1" role="tab">
      CARS
    </button>
    <button  onClick={() => setGridType('Grid2')} type="button" class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="horizontal-alignment-item-2" aria-selected="false" data-hs-tab="#horizontal-alignment-2" aria-controls="horizontal-alignment-2" role="tab">
      DROGON BALL Z
    </button>
    <button  onClick={() => setGridType('Grid3')} type="button" class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="horizontal-alignment-item-3" aria-selected="false" data-hs-tab="#horizontal-alignment-3" aria-controls="horizontal-alignment-3" role="tab">
      INDIAN ARMED FORCES
    </button>
    <button  onClick={() => setGridType('Grid4')} type="button" class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="horizontal-alignment-item-3" aria-selected="false" data-hs-tab="#horizontal-alignment-3" aria-controls="horizontal-alignment-3" role="tab">
    VIRAT KOHLI
    </button>
    <button  onClick={() => setGridType('Grid5')} type="button" class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500" id="horizontal-alignment-item-3" aria-selected="false" data-hs-tab="#horizontal-alignment-3" aria-controls="horizontal-alignment-3" role="tab">
      COMICS SUPERHEROS
    </button>
  </nav>
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
