import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState } from "react";

export default function Banner() {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Marquee
      className="absolute font-montserrat font-bold text-black uppercase text-3xl bg-white speed-90 
    py-3 flex gap-0 z-10 hover:text-bci-white hover:bg-bci-gray hover:shadow-normal-light transition-all duration-500"
      speed={65}
      autoFill={true}
    >
      <div
        className="flex gap-3 pl-3 items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p>BEST</p>
        <Image
          src={hover ? "/StarWhite.svg" : "/Star.svg"}
          width={800}
          height={600}
          alt=" "
          draggable="false"
          className="w-10 h-10"
        />
        <p>COMPANY</p>
        <Image
          src={hover ? "/StarWhite.svg" : "/Star.svg"}
          width={800}
          height={600}
          alt=" "
          draggable="false"
          className="w-10 h-10"
        />
        <p>INSIGHT</p>
        <Image
          src={hover ? "/StarWhite.svg" : "/Star.svg"}
          width={800}
          height={600}
          alt=" "
          draggable="false"
          className="w-10 h-10"
        />
      </div>
    </Marquee>
  );
}
