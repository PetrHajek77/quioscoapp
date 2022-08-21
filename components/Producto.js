import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useQuiosco();
  const { nombre, imagen, precio } = producto;
  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen plattillom${nombre}`}
        width={400}
        height={500}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          className="bg-indigo-400 hover:bg-indigo-500 text-white py-2 px-3 w-full mt-5 uppercase font-bold"
          type="button"
          onClick={() => {
            handleSetProducto(producto);
            handleChangeModal();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
