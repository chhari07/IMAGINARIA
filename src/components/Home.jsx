import React, { useState } from 'react';
import GRID from './GRID_';


const Home = () => {
    const [showGrid, setShowGrid] = useState(false);

    const handleButtonClick = () => {
        setShowGrid(true);
    };

    return (


        <div>
           
            
	
	<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5  w-full  ml-3    md:ml-36  max-w-5xl">
		
		<div class="flex items-center p-4 bg-white rounded">
			
			<div class="flex-grow flex flex-col ml-4">
			
				<div class="flex items-center justify-between">
               
                  <button onClick={handleButtonClick }class="px-8 z-30 py-4  bg-black rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1  after:w-1  after:bg-purple-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
                  CATEGORIES
                </button> 

				</div>
			</div>
		</div>
		
		
		<div class="flex items-center p-4 bg-white rounded">
			
			<div class="flex-grow flex flex-col ml-4">
				
				<div class="flex items-center justify-between">
                <button class="px-8 z-30 py-4  bg-black rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-purple-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
                AI  IMAGES
                </button> 
				</div>
			</div>
		</div>
		
		
		<div class="flex items-center p-4 bg-white rounded">
			
			<div class="flex-grow flex flex-col ml-4">
				
				<div class="flex items-center justify-between">
                <button class="px-8 z-30 py-4  bg-black rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-purple-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
                PAID SERVICS
                </button> 
				</div>
			</div>
		</div>
		
	</div>
    
    

         {showGrid && <GRID />}
        </div>
    );
};

export default Home;
