"use client";
import React from "react";

const Bookmark = () => {
  return (
    <div className="flex max-w-xl w-44 items-center space-x-4 cursor-pointer p-3 border border-violet-600 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </svg>
      <h3 className="text-sm"></h3>
      <span className="w-full"></span>
    </div>
  );
};

export default Bookmark;
