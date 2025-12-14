import { Moon } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div>
      <div className="bg-purple-600 p-4 text-white flex flex-row justify-between rounded-lg">
        <h1 className="text-2xl font-bold items-start">ELEGANCE NEXUS STORE</h1>
        <ul className="ml-auto my-auto items-center flex flex-row gap-6">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <Moon className="ml-4 my-auto hover:cursor-pointer items-end" />
      </div>
    </div>
  );
}

export default Navbar;
