"use client";
import logo from "../../assets/logo.png";
import { Navbar } from "flowbite-react";

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded className=" bg-slate-50">
      <Navbar.Brand href="/home">
        <img alt="Logo" className="mr-3 p-1 h-6 sm:h-9" src={logo} />
      </Navbar.Brand>
      <div className="flex justify-end">
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/login" className="mx-4 mt-2 md:mx-0">
            Login
          </Navbar.Link>
          <Navbar.Link href="/joinAsClintOrFreelancer">
            <button className="bg-green-500 hover:bg-green-600 text-white mx-4 font-bold py-2 px-4 rounded-full">
              Sign Up
            </button>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
