import React from 'react'

export const Inputs = ( {texto, name, type, value} ) => { 


  return (
    <div class='w-11/12 lg:w-9/12 2xl:w-1/2 mx-auto'>
    <label className="block p-3">
      <span className="block text-left text-lg font-medium text-slate-700 ">
        {texto}
      </span>
      <input
        name={name}
        type={type}
        placeholder={value}
        class="input"
        required
        disabled
      />
    </label>
  </div>
  )
}
