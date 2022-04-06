import React, { useState } from "react";

export default function ButtonSupport() {
  const [openModalSupport, setOpenModalSupport] = useState(false);

  const handleClickOpenModalSupport = () => {
    setOpenModalSupport(true);
  };

  const handleClickCloseModalSupport = () => {
    setOpenModalSupport(false);
  };

  if (openModalSupport) {
    return (
      <div className="relative flex justify-center items-center">
        <div
          id="menu"
          className=" fondoModal w-screen h-screen bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
        >
          <div className="w-3/4 h-3/4 m-auto flex justify-center items-center bg-red-500">
            <div className="salir p-5">
              <button
                className="font-bold text-xl text-cream-can text-center"
                onClick={() => handleClickCloseModalSupport()}
              >
                No quiero ayuda, deseo salir
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 w-full">
      <button
        className="bottom-0 mb-5 mr-5 float-right px-5 py-2 bg-cream-can text-black text-sm font-bold tracking-wide rounded-full focus:outline-none"
        onClick={() => handleClickOpenModalSupport()}
      >
        ¿Necesitas ayuda?
      </button>
    </div>
  );
}
