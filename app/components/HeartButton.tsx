"use client";

import { FC } from "react";
import { HeartButton } from "../interfaces/interface";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HeartButton: FC<HeartButton> = ({ listingId, currentUser }) => {
  const hasFavorited = false;
  const toggleFav = () => {};

  return (
    <div
      className="relative hover:opacity-80 transition cursor-pointer"
      onClick={toggleFav}
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />

      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/[70]"}
      />
    </div>
  );
};

export default HeartButton;
