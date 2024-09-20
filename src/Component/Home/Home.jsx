import React from 'react';

import Testimonial from '../Testimonial/Testimonial';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';
import ImageSlider from '../Slider/ImageSlider';
import OurClient from '../OurClient/OurClient';
import Star from '../Star/Star';
import AboutSection from '../AboutSection/AoutSection';
import MachineTable from '../MachineTable/MachineTable';
import ClientCounter from '../ClientCounter/ClientCounter';


// Custom Previous Button


function Home() {
 

  return (
    <div>
     <ImageSlider/>
     <Star/>
     <AboutSection/>
     <Products/>
     <Gallery/>
    
    <ClientCounter/>
    <OurClient/>
    <MachineTable/>
    <Testimonial/>
    </div>
  );
}

export default Home;
