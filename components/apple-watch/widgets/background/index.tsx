import Image from "next/image";

import watchface from "./background.png";

export const Background = () => {
  return <Image src={watchface} alt="background" fill unoptimized className="absolute mt-0 scale-110 blur-[12px]" />;
};

export default Background;
