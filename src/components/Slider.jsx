import { useEffect } from "react";
import { useState } from "react";

const Slider = () => {
  const data = [
    "https://images.unsplash.com/photo-1720733785341-168737dd14ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1687295474002-4c73ef1b020a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1687295474027-1531ddc58fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564914144812-962f7f756793?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1563178445-611713f97a84?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675622644852-0d2468e077f9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      handleNext();
    }, 3000);
    return () => {
      clearInterval(i);
    };
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev < 1 ? data.length - 1 : prev - 1));
  };
  return (
    <div className="my-8">
      <div className="w-[600px] mx-auto flex justify-center items-center gap-4">
        <div>
          <button
            onClick={handlePrev}
            className="border p-4 bg-gray-300 font-bold"
          >
            prev
          </button>
        </div>
        <img className="w-full" src={data[active]} alt="Wallpaper" />
        <div>
          <button
            onClick={handleNext}
            className="border p-4 bg-gray-300 font-bold"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
