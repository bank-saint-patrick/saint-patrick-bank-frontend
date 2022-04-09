import React from 'react';

export default function Inputs(props) {
  const {
    label,
    type,
    placeholder,
    value,
    seter,
  } = props;

  const handleChange = (e) => {
    seter(e.target.value);
  };

  return (
    <div className="w-11/12 lg:w-9/12 2xl:w-1/2 mx-auto">
      <p className="block p-3">
        <span className="block text-left text-lg font-medium text-slate-700 ">{label}</span>
        <input className="input" type={type} placeholder={placeholder} value={value} onChange={handleChange} />
      </p>
    </div>
  );
}
