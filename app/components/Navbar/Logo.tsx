"use client";

import { useRouter } from "next/navigation";

import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["800"] });

const Logo = () => {
  const router = useRouter();

  return (
    <button
      className={`${manrope.className} text-2xl md:text-3xl text-red-500`}
      onClick={() => router.push("/")}
    >
      steelobnb
    </button>
  );
};

export default Logo;
