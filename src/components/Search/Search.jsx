import { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isSearchVisible, setIsSearchListVisible] = useState(false);
  const [cacheResult, setCacheResult] = useState({});

  useEffect(() => {
    const i = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(i);
  }, [searchText]);

  const fetchData = async () => {
    if (cacheResult[searchText]) {
      setSearchData(cacheResult[searchText]);
    } else {
      const data = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${searchText}`
      );
      const json = await data.json();
      setCacheResult((prev) => ({ ...prev, [searchText]: json[1] }));
      setSearchData(json[1]);
    }
  };

  console.log(cacheResult);

  return (
    <div className="max-w-xl  mx-auto px-16 py-14">
      <form className="" action="">
        <input
          className="w-full border p-2 border-black rounded-md"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsSearchListVisible(true)}
          onBlur={() => setIsSearchListVisible(false)}
        />
      </form>
      {searchData.length > 1 && isSearchVisible && (
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
