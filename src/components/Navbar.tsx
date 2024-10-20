import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row w-full p-5 items-center justify-between bg-[#238B45] opacity-50 sticky top-0 z-50">
      {/* LOGO */}
      <div className="flex-1">
        <a href="/">
          <Image src="/logo.svg" alt="logo" width={250} height={5} />
        </a>
      </div>
      {/* NAVIGATION */}
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-4 text-white font-bold">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* CART */}
      <div className="flex-1 flex justify-end">
        <a href="/cart">
          <Image src="/cart.svg" alt="cart" width={250} height={5} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
