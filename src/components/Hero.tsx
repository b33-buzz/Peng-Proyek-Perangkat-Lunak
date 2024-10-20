import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex">
      {/* TITLE */}
      <div className="flex justify-center items-center bg-[#74C476] w-1/2 flex-col">
        <h1 className="-rotate-12 text-4xl">
          SOTO AYAM LAMONGAN &quot;PAKDHE&quot;
        </h1>
        <h1 className="-rotate-12 text-4xl">SOTO AYAM LAMONGAN</h1>
        <h1 className="-rotate-12 text-4xl">
          SOTO AYAM LAMONGAN &quot;PAKDHE&quot;
        </h1>
      </div>
      {/* IMAGE */}
      <div className="w-1/2 relative">
        <Image
          src="/hero-image.png"
          alt="soto-ayam"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Hero;
