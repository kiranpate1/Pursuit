import React from "react";

type Props = {
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
    <div onClick={expand}>
      <div>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default Event;
