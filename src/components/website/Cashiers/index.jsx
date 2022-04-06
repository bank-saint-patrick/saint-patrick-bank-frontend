import React from 'react';
import Navbar from '../../Navbar';

export default function Cashiers() {
  return (
    <div className="wrapper flex-column h-screen">
      <Navbar />
      <div className="bg-lime-100 full-height-conditional grid grid-cols-1">
        <div className="bg-white flex flex-col justify-center px-10">
          <span className="text-plantation text-4xl text-center font-bold mb-2">Cajeros</span>
        </div>
      </div>
    </div>
  );
}
