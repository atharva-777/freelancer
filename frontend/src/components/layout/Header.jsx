  import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-slate-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-6 w-auto mr-2" />
      </div>
      <div className="flex items-center">
        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 8H19C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6H5C4.44772 6 4 6.44772 4 7C4 7.55228 4.44772 8 5 8ZM5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13ZM19 17H5C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                />
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`md:flex md:items-center ${
            isOpen ? 'block' : 'hidden'
          } md:ml-4 mt-4 md:mt-0`}
        >
          <a href="#" className="mx-4 md:mx-0">
            Login
          </a>
          {!isOpen && (
            <button className="bg-green-500 hover:bg-green-600 text-white mx-4 font-bold py-2 px-4 rounded-full">
              Sign Up
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
