"use client";

import { useRouter } from "next/navigation";

import { Manrope } from "next/font/google";

type Props = {};

const manrope = Manrope({ subsets: ["latin"], weight: ["800"] });

const Logo = (props: Props) => {
  const router = useRouter();

  return (
    <h1 className={`${manrope.className} text-2xl md:text-3xl text-red-500`}>
      steelobnb
    </h1>
  );
};

export default Logo;
