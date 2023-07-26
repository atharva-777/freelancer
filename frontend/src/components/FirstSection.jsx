import React from "react";
import landing from "../assets/landing.png";
import {Link} from 'react-router-dom'

function FirstSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-16">
      <div className="text-center md:text-left mb-8 md:mb-0 md:mr-16 py-7">
        <h1 className="text-green-500 text-4xl md:text-7xl lg:text-9xl mx-10 px-10">
          How work
          <br />
          should work
        </h1>
        <p className="text-sm md:text-xl  p-6 ml-16 ">
          Forget the old rules. You can have the best people.
          <br />
          Right now. Right here.
        </p>
        {/* <a href="/login"> */}
          <button className="bg-green-500 hover:bg-green-600 text-white mt-4 md:mt-2 sm:m-auto md:ml-20 font-bold py-2 px-14 my-0  ml-20 rounded-full">
        <Link to="/joinAsClintOrFreelancer">Continue</Link>
            
          </button>
        {/* </a> */}
      </div>
      <div className="flex justify-center">
        <img className="w-64 md:w-96" src={landing} alt="" />
      </div>
    </div>
  );
}

export default FirstSection;
