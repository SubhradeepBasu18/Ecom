import React from 'react';
import sale from "../assets/sale.jpg";
import speaker from "../assets/speaker.jpg";

function Home() {
    
  return (
    <div>
      <img src={sale} alt="sale" className="w-full" />
      <img src={speaker} alt="speaker" className="w-full" />
    </div>

    

  );
}

export default Home;
