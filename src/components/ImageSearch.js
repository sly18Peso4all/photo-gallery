import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-0 border-0 border-b0 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4"
            type="text"
            placeholder="Search Image..."
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-700 rounded mb-4"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
