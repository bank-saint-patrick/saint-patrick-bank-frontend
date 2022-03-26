import React, { useState, useEffect } from 'react';
import { validateSession } from '../../utils/auth';
import Loading from '../../needs/Loading';
import Navbar from '../../Navbar';

export default function Desktop() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    validateSession();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (<Loading />);
  }

  return (
    <div className="wrapper flex-column h-screen">
      <Navbar session />
      <div className="bg-lime-100 full-height-conditional grid grid-cols-1">
        <div className="bg-white flex flex-col justify-center px-10">
          <span className="text-plantation text-4xl text-center font-bold mb-2">Desktop</span>
        </div>
      </div>
    </div>
  );
}
