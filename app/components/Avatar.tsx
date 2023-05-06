"use client";

import Image from "next/image";
import { FC } from "react";
import { Avatar } from "../interfaces/interface";

const Avatar: FC<Avatar> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
