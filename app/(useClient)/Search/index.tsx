import React from "react";

const Search = () => {
  return (
    <div className="flex items-baseline space-x-6">
      <h4 className="text-emerald-700">Search</h4>
      <input
        className="p-3 rounded-md bg-violet-50 w-64 text-emerald-600"
        placeholder="anything.."
      />
    </div>
  );
};

export default Search;
