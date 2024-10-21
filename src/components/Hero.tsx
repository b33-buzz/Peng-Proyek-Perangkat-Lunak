import Image from "next/image";
import Marquee from "react-fast-marquee";
import { poppins } from "@/app/lib/fonts";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex">
      {/* TITLE */}
      <div className="flex justify-center items-center bg-[#74C476] w-1/2 flex-col">
        <div className="-rotate-12 text-6xl whitespace-nowrap overflow-hidden text-ellipsis">
          <h1 className={`${poppins.className} moving-text`}>
            <Marquee direction="right" speed={170}>
              SOTO AYAM LAMONGAN &quot;PAKDHE&quot;
            </Marquee>
          </h1>
        </div>
        <div className="-rotate-12 text-8xl whitespace-nowrap overflow-hidden text-ellipsis">
          <h1 className={`${poppins.className} outline-text moving-text`}>
            <Marquee speed={135}>SOTO AYAM LAMONGAN</Marquee>
          </h1>
        </div>
        <div className="-rotate-12 text-6xl whitespace-nowrap overflow-hidden text-ellipsis mt-5">
          <h1 className={`${poppins.className} moving-text`}>
            <Marquee direction="right" speed={170}>
              SOTO AYAM LAMONGAN &quot;PAKDHE&quot;
            </Marquee>
          </h1>
        </div>
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
