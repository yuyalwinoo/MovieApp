import Image from "next/image";
import React from "react";

interface ThumbnailProps {
  name: string;
  title: string;
  backdrop_path: string;
  overview: string,
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  name,
  title,
  backdrop_path,
  overview
}) => {
  return (
    <a href="#" title={overview} className="flex flex-col min-w-[350px]">
      <Image
        className="rounded-lg"
        src={"https://image.tmdb.org/t/p/w400/" + backdrop_path}
        alt={`${title || name} backdrop`}
        width={350}
        height={200}
        loading="lazy"
      />
        <p className="name mt-2 text-lg font-bold">
          {title}
          {name}
        </p>
    </a>
  );
};

export default Thumbnail;
