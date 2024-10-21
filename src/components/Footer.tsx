import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-black p-5 flex justify-between items-start text-white">
        <div className="flex flex-col items-start">
          {/* Logo */}
          <div className="mb-3">
            <Image
              src={"/logo.png"}
              alt="Soto Lamongan Logo"
              width={150}
              height={15}
            />
          </div>
          <p>08xxxx</p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col items-start mr-5">
            <ul className="text-left">
              <li>Beranda</li>
              <li>Menu</li>
              <li>Kontak</li>
              <li>Tentang Kami</li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <p>Lokasi</p>
            <p className="whitespace-normal">
              Jl. Guru Mughni No.7, RT.2/RW.2, Karet Semanggi,
              <br /> Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus{" "}
              <br />
              Ibukota Jakarta
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
