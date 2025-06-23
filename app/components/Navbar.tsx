'use client';
import React from 'react'
import Link from "next/link";
import { BellIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
const Navbar = () => {
  const [open,setOpen]=useState(false);
const toggledown=()=>{
  setOpen(!open);
}
  return (
   <div className="min-h-screen flex flex-col justify-between bg-gray-100">
    <div className="flex-grow">
    {/*---------------------------------------------------------this is for screen bigger screen----------------------------------------------------------------*/}
    <div className="hidden md:flex bg-gray-300 w-full h-16 flex flex-row gap-5">
    <div>
      <Link href="/" >
        <img src="https://i.pinimg.com/736x/57/ae/88/57ae8888c6b1601bc3db106e48bac706.jpg"
        alt="homepage"
          className="h-10 w-10 object-cover mt-2 ml-2 rounded">

        </img>
      </Link>
    </div>
      <Link href="/user" className="text-black mt-4 mb-4 font-bold hover:bg-gray-400 hover:border-b-2 rounded px-2 ">
      Dashboard
      </Link>
    
      <Link href="/user" className="text-black mt-4 mb-4 font-bold hover:bg-gray-400 hover:border-b-2 rounded px-2 ">
      Team
      </Link>

      <Link href="/user" className="text-black mt-4 mb-4 font-bold hover:bg-gray-400 hover:border-b-2 rounded px-2 ">
      Project
      </Link>
    
      <Link href="/user" className="text-black mt-4 mb-4 font-bold hover:bg-gray-400 hover:border-b-2 rounded px-2 ">
      Calender
      </Link>
    <div className="flex-grow"></div>
    <div className=" text-black mt-4 mb-4 font-bold hover:bg-gray-400 hover:border-b-2 rounded w-7 h-7 ">
      <BellIcon/>
    </div>
      <Link href="/user"  className="h-10 w-10 mt-2 ml-2 rounded-full overflow-hidden mr-2">
        <img src="https://t4.ftcdn.net/jpg/06/38/85/49/240_F_638854973_hgAF7vx2dRayo1JOUdzgLt8o488gMwjS.jpg"
          alt="user image">
        </img>
      </Link>
    </div>
    {/*--------------------------------------------------------------------------this is for mobiles----------------------------------------------------------------------*/}
    <div className="flex md:hidden bg-gray-300 w-full h-16 flex flex-row">
      <div className="absolute">
      <button onClick={toggledown}>
        <Bars3Icon className=" absolute h-10 w-10 text-black font-bold mt-2 ml-2 pd-2" />
      </button>

      {open && (
        <div className="relative top-10 left-0 w-40 h-screen bg-black shadow-lg z-50 p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/user"
                className="block text-white font-bold hover:bg-gray-700 px-4 py-2 rounded"> Dashboard
                </Link>
            </li>
            <li>
              <Link
                href="/user"className="block text-white font-bold hover:bg-gray-700 px-4 py-2 rounded">Team
              </Link>
            </li>
            <li>
              <Link
                href="/user"className="block text-white font-bold hover:bg-gray-700 px-4 py-2 rounded">Project
              </Link>
            </li>
            <li>
              <Link href="/user"className="block text-white font-bold hover:bg-gray-700 px-4 py-2 rounded">Calendar</Link>
            </li>
          </ul>
        </div>
      )}
  </div>

      {/*<Bars3Icon className="h-8 w-8 text-black font-bold mt-2 ml-2" />*/}
      <div className="flex-grow"></div>
      <div>
      <Link href="/" >
        <img src="https://i.pinimg.com/736x/57/ae/88/57ae8888c6b1601bc3db106e48bac706.jpg"
        alt="homepage"
          className="h-10 w-10 object-cover mt-2 ml-2 rounded ">
        </img>
      </Link>
    </div>
    <div className="flex-grow"></div>
    <div className="h-10 w-10 mt-2 ml-2 rounded-full overflow-hidden mr-2">
      <Link href="/user">
        <img src="https://t4.ftcdn.net/jpg/06/38/85/49/240_F_638854973_hgAF7vx2dRayo1JOUdzgLt8o488gMwjS.jpg"
          alt="user image">
        </img>
      </Link>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar