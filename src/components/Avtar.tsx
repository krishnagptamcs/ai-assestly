import React from "react";
import { createAvatar } from "@dicebear/core";
import { rings } from "@dicebear/collection";
import Image from "next/image";

export interface AvtarProps {
  seed: string;
  className?: string;
}

const Avtar = ({ seed, className }: AvtarProps) => {
  const avtar = createAvatar(rings, {
    seed,
  });

  const svg = avtar.toString();

  //Converting picture into code
  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString(
    "base64"
  )}`;
  return (
    <>
      <Image
        src={dataUrl}
        alt="user avtar"
        width={100}
        height={100}
        className={className}
      />
    </>
  );
};

export default Avtar;
