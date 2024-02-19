"use client";
import React, { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="m-auto w-1/2 mt-2">
      <input
        type="text"
        className="outline-none border-2 w-[300px] h-[40px] p-6 rounded-md focus:ring-green-200"
        placeholder="Enter name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className=" px-4 py-3 text-white bg-green-400 rounded-md ml-2 hover:bg-green-600">
        Search
      </button>
    </div>
  );
};

export { SearchInput };