import React from "react";
import Dot from "./Dot";

type Props = {
  isActive?: boolean;
  type: string;
  time: string;
  title: string;
  location: string;
  images: {
    pfp: string;
    bg: string;
  };
};

const Event = ({ type, time, title, location, images }: Props) => {
  const expand = () => {
    console.log("Event expanded");
  };

  return (
    <div
      onClick={expand}
      className="p-4 pr-6 rounded-[48px] flex flex-col gap-6 bg-[#22274A]"
    >
      <div className="flex flex-row gap-6 items-center h-[158px]">
        <img
          src={images.pfp}
          alt="Event profile picture"
          className="w-[100px] h-full rounded-[32px] object-cover"
        />
        <div className="h-full w-full flex flex-col justify-between pt-[8px] pb-[12px] items-start">
          <div className="flex flex-row items-center gap-4">
            <Dot />
            <p className="font-body">{time}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-body">{title}</p>
            <p className="font-body opacity-50">{location}</p>
          </div>
        </div>
        <Arrow
          type={""}
          time={""}
          title={""}
          location={""}
          images={{
            pfp: "",
            bg: "",
          }}
        />
      </div>
    </div>
  );
};

export const Arrow = (props: Props) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <path
          d="M33.0002 21.6441L18.1908 6.83459C16.9445 5.58837 14.9249 5.58535 13.675 6.82785C12.4198 8.0756 12.4168 10.1056 13.6683 11.3571L23.9552 21.6441L13.6683 31.9311C12.4168 33.1826 12.4198 35.2126 13.675 36.4603C14.9249 37.7028 16.9445 37.6998 18.1908 36.4536L33.0002 21.6441Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default Event;
