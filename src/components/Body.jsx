import { useEffect } from "react";
import { useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY + 80 >=
      document.body.scrollHeight
    ) {
      fetchMemes();
    }
  };

  console.log(memes.length);

  const fetchMemes = async () => {
    try {
      setIsLoading(true);
      const data = await fetch("https://meme-api.com/gimme/20");
      const json = await data.json();
      setIsLoading(false);
      setMemes((memes) => [...memes, ...json.memes]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-6 px-16 py-8">
      {memes.map((meme, i) => (
        <MemeCard key={i} meme={meme} />
      ))}
      {isLoading && <Shimmer />}
    </div>
  );
};

export default Body;
