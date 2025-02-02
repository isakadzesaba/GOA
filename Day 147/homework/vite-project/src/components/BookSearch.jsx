import React, { useState } from "react";

const BookSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default BookSearch;
