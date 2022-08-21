import React from "react";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ category }) => {
  const { handleClickCategoria, categoriaActual } = useQuiosco();
  const { id, nombre, icono } = category;

  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-200" : ""
      } flex items-center gap-4 w-full border p-2 hover:bg-amber-200`}
    >
      <Image
        width={60}
        height={60}
        src={`/assets/img/icono_${icono}.svg`}
        alt="image icono"
      />
      <button
        type="button"
        className="text-2xl font-bold cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
