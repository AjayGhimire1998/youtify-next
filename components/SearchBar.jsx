import { getVideoBySearch } from "@/services/ytApiCalls";
import React, { useState } from "react";

function SearchBar() {
  const [searchParam, setSearchParam] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  console.log(searchParam)
 


  const handleSearchClick = () => {
    setSearchedData(getVideoBySearch(searchParam));
    console.log(searchedData)
  };
  return (
    <div className=" flex flex-col place-items-center align-middle">
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Search for a song"
          className="h-10 w-auto border-x border-y hover:scale-110 transition duration-300 ease-in-out mr-3"
          onChange={(e) => setSearchParam(e.target.value)}
        ></input>
        <button
          className="bg-blue-900 text-white p-1 rounded-lg  hover:scale-110 transition duration-300 ease-in-out "
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      <div className="  h-screen">
        {/* <video src={`https://www.youtube.com/watch?v=`} */}
        <br/>
          <br/>
          <p className="text-red-500 text-8xl font-semibold"> 🛠️ Under Construction</p>
      </div>
    </div>
  );
}

export default SearchBar;
