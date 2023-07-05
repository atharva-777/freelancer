  import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-slate-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-6 w-auto mr-2" />
      </div>
      <nav className="md:flex md:items-center">
        <a href="#" className="mx-4 md:mx-0">
          Login
        </a>
        <button className="bg-green-500 hover:bg-green-600 text-white mx-4 font-bold py-2 px-4 rounded-full">
          Sign Up
        </button>
      </nav>
    </header>
  );
}

export default Header;
