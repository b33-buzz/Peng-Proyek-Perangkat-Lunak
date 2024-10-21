import Image from "next/image";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex flex-row w-full p-5 items-center justify-between bg-[#238B45] opacity-50 sticky top-0 z-50">
      {/* LOGO */}
      <div className="flex-1 ml-4">
        <a href="/">
          <Image src="/logo.png" alt="logo" width={200} height={5} />
        </a>
      </div>
      {/* NAVIGATION */}
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-4 text-white font-bold">
          <li>
            <a href="/">Beranda</a>
          </li>
          <li>
            <a href="/#menu">Menu</a>
          </li>
          <li>
            <a href="/#about">Tentang Kami</a>
          </li>
        </ul>
      </div>
      {/* CART */}
      <div className="flex-1 flex justify-end">
        <div className="border rounded-full p-2 bg-white mr-5">
          <a href="/cart">
            <MdOutlineShoppingBag size={30} color="green" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
