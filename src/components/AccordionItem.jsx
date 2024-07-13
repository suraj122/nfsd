import { useState } from "react";

const AccordionItem = ({ item, isOpen, setIsopen }) => {
  return (
    <div className="border border-black my-6">
      <h2
        onClick={() => setIsopen()}
        className="bg-gray-200 p-2 cursor-pointer"
      >
        {item.title}
      </h2>
      {isOpen && <p className="p-2">{item.desc}</p>}
    </div>
  );
};

export default AccordionItem;
