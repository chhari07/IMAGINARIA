import React, { useState } from 'react';
import Grid from './Grid';
import Grid2 from './Grid2';
import Grid3 from './Grid3';


const App = () => {
  const [grids, setGrids] = useState([]);
  const [counter, setCounter] = useState(1);

  const renderGrids = () => {
    const newGrids = Array.from({ length: 5 }, (_, index) => (
      <div key={index} className="grid bg-gray-200 border border-gray-400 p-4 text-center">
        {`Grid ${index + 1}`}
      </div>
    ));
    setGrids(newGrids);
  };

  const changeGrids = () => {
    const newGrids = Array.from({ length: 5 }, (_, index) => (
      <div key={index} className="grid bg-blue-200 border border-blue-400 p-4 text-center">
        {`New Grid ${counter} - ${index + 1}`}
      </div>
    ));
    setGrids(newGrids);
    setCounter(counter + 1);
  };

  return (
    <div className="App text-center">
      <div className="my-4">
        <button onClick={renderGrids} className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
          Render Grids
        </button>
        <button onClick={changeGrids} className="bg-green-500 text-white py-2 px-4 rounded">
          Change Grids
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Grid}
          {Grid2}
          {Grid3}
      </div>
    </div>
  );
};

export default App;
