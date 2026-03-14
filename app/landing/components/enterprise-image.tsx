import Image, { StaticImageData } from "next/image";
import React from "react";

type CustomImageProps = {
  className?: string;
  src: string | StaticImageData;
  alt: string;
};

function CustomImage({ className, src, alt }: CustomImageProps) {
  return <Image fill src={src} className={className && className} alt={alt} />;
}

export default CustomImage;
