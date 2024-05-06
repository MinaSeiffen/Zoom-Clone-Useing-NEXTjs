import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
    className: string;
    title:string;
    img:string;
    description:string;
    handleClick: ()=> void;
}

const HomeCard = ({img , title , description , handleClick , className}: HomeCardProps) => {
  return (
    <div
      className={cn(' px-4 py-6 flex flex-col justify-between w-full xl: max-w-[370px] min-h-[320px] rounded-[14px] cursor-pointer' , className)}
      onClick={handleClick}
    >
      <div className="glassmorpgism flex-center size-12 rounded-[10px]">
        <Image
          src={img}
          alt="meeting"
          width={27}
          height={27}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold"> {title} </h1>
        <p className="text-lg font-normal"> {description} </p>
      </div>
    </div>
  );
};

export default HomeCard;
