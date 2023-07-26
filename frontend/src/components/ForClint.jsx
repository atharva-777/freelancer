import React from 'react'
import {Link} from 'react-router-dom'

function ForClint() {
  return (
    <div className="flex my-20 justify-end">
      <div className="rounded card__bg__image">
        <div className="">
          <h2 className="text-white text-left ml-16  mt-8 text-3xl font-inria-serif ">
            For clients
          </h2>

          <h1 className="text-white text-shadow font-inria-serif text-7xl font-normal text-left ml-16 mt-20 w-76 h-40">
            Find talent
            <br />
            your way
          </h1>

          <p className="text-white text-left ml-16 mt-14 font-calibri text-lg font-normal leading-8 tracking-wide flex flex-col w-92 h-28 leading-tight">
            Work with the largest network of independent <br />
            professionals and get things done—from quick <br />
            turnarounds to big transformations.
          </p>
        </div>
        <div className="md:flex ml-6 mt-11 justify-start">
          <div className="w-48 mx-10 h-12 flex-shrink-0 rounded-md bg-green-500 m-4 text-center">
            <Link to='/SignUpClient'>
            Join as Client
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ForClint


