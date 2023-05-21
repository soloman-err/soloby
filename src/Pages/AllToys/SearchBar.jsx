import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="w-[40%] mx-auto my-5 py-1 ps-1 flex gap-2 rounded-full bg-slate-700 pe-5">
      <div className="w-full">
        <input
          type="search"
          placeholder="Search.."
          className="input input-bordered rounded-full w-full"
        />
      </div>
      <button className="text-zinc-50">
        <FaSearch size={28} />
      </button>
    </div>
  );
};

export default SearchBar;
