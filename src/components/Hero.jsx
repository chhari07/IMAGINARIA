import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero = () => {
  const carouselStyle = {
    width: '100%',
    maxWidth: '1230px', // max width for large screens
  
  };

  return (
    <div style={carouselStyle}>
      <Carousel 
        showThumbs={false} 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay 
        dynamicHeight
      >
        <div>
          <img src="  https://wallpapercave.com/wp/wp2598648.jpg         " alt="Slide 1" />
        </div>
        <div>
          <img src="https://wallpapercave.com/wp/E8XUOvx.jpg  " alt="Slide 2" />
        </div>
        <div>
          <img src="https://wallpapercave.com/wp/wp2598653.jpg         " alt="Slide 3" />
        </div>
        <div>
          <img src=" https://wallpapercave.com/wp/wp2598686.jpg    " alt="Slide 4" />
        </div>
        <div>
          <img src="  https://wallpapercave.com/wp/wp2598663.jpg    " alt="Slide 5" />
        </div>
        <div>
          <img src=" https://wallpapercave.com/wp/wp2491611.jpg      " alt="Slide 6" />
        </div>
        <div>
          <img src=" https://wallpapercave.com/wp/wp4606199.jpg      " alt="Slide 7" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
