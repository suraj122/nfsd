import React from "react";

const MemeCard = ({ meme }) => {
  const { title, url } = meme;
  return (
    <div className=" border-4 border-gray-950 rounded-lg">
      <img
        height={200}
        className="h-[200px] w-full object-cover rounded-lg"
        src={url}
        alt={title}
      />
      <h2 className="p-4">{title}</h2>
    </div>
  );
};

export default MemeCard;
