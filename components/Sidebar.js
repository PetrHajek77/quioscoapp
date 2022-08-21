import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";
import Link from "next/link";
const Sidebar = () => {
  const { categories } = useQuiosco();

  return (
    <>
      <Link href="/">
        <a className="logo">
          <Image
            width={300}
            height={100}
            src="/assets/img/logo.svg"
            alt="imagen logotipo"
          />
        </a>
      </Link>
      <nav className="mt-10">
        {categories.map((category) => {
          return <Categoria key={category.id} category={category} />;
        })}
      </nav>
    </>
  );
};
export default Sidebar;
