import React from 'react';
import { Parallax, Background } from 'react-parallax';

export const Homepage = () => {
	// return (
	// 	<div>This is the Homepage component</div>
	// );
return ( 
	<div>
    <Parallax // Slide 1: Homepage 
      blur={10}
      bgImage={require('../bcg_slide-1.jpg')}
      bgImageAlt="slide 1"
      strength={200}
      // className="bcg"
      // bgWidth='100%'
      // bgHeight='100%'
    >
      
      Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height: '200px' }} />

    </Parallax>
    <Parallax // Slide 2: Kitchen + Bathroom
      blur={{ min: -15, max: 15 }}
      bgImage={require('../bcg_slide-2.jpg')}
      bgImageAlt="slide 2"
      strength={200}
      // className="bcg"
      // bgWidth='100%'
      // bgHeight='100%'
    >
   
      Blur transition from min to max
      <div style={{ height: '200px' }}/>

    </Parallax>
    <Parallax // Slide 3: Interior Building Supplies
	  blur={{ min: -15, max: 15 }}
      bgImage={require('../bcg_slide-3.jpg')}
      bgImageAlt="slide 3"
      strength={300}
      // className="bcg"
      // bgWidth='100%'
      // bgHeight='100%'
    >
      
      Use the background component for custom elements
      <div style={{ height: '200px' }}/>

    </Parallax>

    <Parallax // Slide 4: Exterior Building Supplies
	  blur={{ min: -15, max: 15 }}
      bgImage={require('../bcg_slide-4.jpg')}
      bgImageAlt="slide 4"
      strength={300}
      // className="bcg"
      // bgWidth='100%'
      // bgHeight='100%'
    >
     
     Use the background component for custom elements
     <div style={{ height: '200px' }}/>

    </Parallax>
  </div>

);
};
