"use client";

import Image from "next/image";
import Event from "../components/Event";

const EventInfo = [
  {
    type: "entertainment",
    time: "8pm",
    title: "Beyoncé : Renaissance World Tour",
    location: "MetLife Stadium",
    images: {
      pfp: "../public/entertainment-pfp.png",
      bg: "../public/entertainment-bg.png",
    },
  },
  {
    type: "recreation",
    time: "Live",
    title: "Blue Jays @ NY Yankees",
    location: "Yankee Stadium",
    images: {
      pfp: "../public/recreation-pfp.png",
      bg: "../public/recreation-bg.png",
    },
  },
  {
    type: "arts",
    time: "Tomorrow",
    title: "Spiderman: Into The Spiderverse",
    location: "AMC 34th Street 14",
    images: {
      pfp: "../public/arts-pfp.png",
      bg: "../public/arts-bg.png",
    },
  },
];

export default function Home() {
  return (
    <main>
      {EventInfo.map((event, i) => (
        <Event key={i} {...event} />
      ))}
    </main>
  );
}
