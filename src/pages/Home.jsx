import React from "react";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mt-6">
        Welcome to the E-commerce Store!
      </h2>
      <p className="mt-4 text-lg">Browse our collection of amazing products.</p>
      <SearchBar />
    </div>
  );
}

export default Home;
