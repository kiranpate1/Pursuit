"use client";

import React, { MutableRefObject, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Event from "../components/Event";

const EventInfo = [
  {
    type: "entertainment",
    time: "8pm",
    title: "Beyoncé : Renaissance World Tour",
    location: "MetLife Stadium",
    images: {
      pfp: "/entertainment-pfp.png",
      bg: "/entertainment-bg.png",
    },
  },
  {
    type: "recreation",
    time: "Live",
    title: "Blue Jays @ NY Yankees",
    location: "Yankee Stadium",
    images: {
      pfp: "/recreation-pfp.png",
      bg: "/recreation-bg.png",
    },
  },
  {
    type: "arts",
    time: "Tomorrow",
    title: "Spiderman: Into The Spiderverse",
    location: "AMC 34th Street 14",
    images: {
      pfp: "/arts-pfp.png",
      bg: "/arts-bg.png",
    },
  },
];

export default function Home() {
  function handleEventClick(i: number) {
    console.log(i);
  }
  return (
    <main>
      <div className="absolute top-0 left-0 w-full h-full bg-[#111927] flex items-center justify-center">
        <div className="flex flex-col gap-[26px] items-stretch w-[780px]">
          {EventInfo.map((event, i) => (
            <div key={i} onClick={() => handleEventClick(i)}>
              <Event {...event} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
