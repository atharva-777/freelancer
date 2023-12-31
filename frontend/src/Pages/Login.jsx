("use client");
import React from "react";
import logo from "../assets/logo.png";
import { Navbar } from "flowbite-react";
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)
    try{
      const data = await axios.post('/login',user)
      console.log(data.data.role)
    }catch(error){
      console.log(error)
    }
  }
  
  

  return (
    <>
    
      <div className="min-h-screen bg-gray-50 flex flex-col  py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full  sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to FMP
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full m-4 sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={(e)=>{
              e.preventDefault();
              handleSubmit(e);
            }}>
              <div className="">
                <label
                  htmlFor="email"
                  className="flex mb-3 justify-start  text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => {
                      setUser({ ...user, email:e.target.value })
                    }}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className=" flex mb-3 justify-start text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => {
                      setUser({ ...user,password : e.target.value })
                    }}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-green-400 hover:text-green-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Don't have an FMP account?
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 mt-4 focus:ring-offset-2 focus:ring-green-500"
              >
                <Link to='/JoinAsClintOrFreelancer'>

                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
