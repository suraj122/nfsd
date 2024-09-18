import { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${searchText}`
    );
    const json = await data.json();
    setSearchData(json[1]);
  };

  return (
    <div className="max-w-xl  mx-auto px-16 py-14">
      <form className="" action="">
        <input
          className="w-full border p-2 border-black rounded-md"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
      {searchData.length > 0 && (
        <ul className="border rounded-md border-black p-2">
          {searchData.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
