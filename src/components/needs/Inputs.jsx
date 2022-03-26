import React from 'react';

export default function Inputs({
  texto, name, type, value,
}) {
  return (
    <div className="w-11/12 lg:w-9/12 2xl:w-1/2 mx-auto">
      <p className="block p-3">
        <span className="block text-left text-lg font-medium text-slate-700 ">{texto}</span>
        <input name={name} type={type} placeholder={value} className="input" required disabled />
      </p>
    </div>
  );
}
