import React from "react";
import { useState } from "react";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');

  
  return (
    <>
    <div className="text-center d-flex justify-content-center align-items-center">
      <form className="search">
        <input
          type="search"
          className="search-input mt-5 me-3 p-3"
          placeholder="Search a movie..."
         onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-info mb-1">Search</button>
      </form>
    </div>

    </>
  );
};

export default Main;
