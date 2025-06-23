import React from 'react'
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" w-full bg-black flex flex-col text-gray-100 gap-4 p-5 mt-5">
      <Link href="/" >
        <img src="https://i.pinimg.com/736x/57/ae/88/57ae8888c6b1601bc3db106e48bac706.jpg"
        alt="homepage"
          className="h-10 w-10 object-cover mt-2 ml-2 rounded">

        </img>
      </Link>
      <p className="px-2">Making the world a better place through constructing elegant hierarchies.</p>
      <div className="flex flex-row gap-3 mt-2 fill-current text-grey-200 ml-2">
        <Link href="https://www.youtube.com">
        <svg className="w-6 h-6 " viewBox="0 0 24 24">
          <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-1-2.1-1.1C17.1 2.4 12 2.4 12 2.4h-.1s-5.1 0-8.6.4c-.4 0-1.3.1-2.1 1.1C.6 4.6.5 6.2.5 6.2S0 8.1 0 9.9v1.8c0 1.8.5 3.7.5 3.7s.2 1.6.8 2.3c.8.9 1.8.9 2.3 1C7 19.6 12 19.6 12 19.6s5.1 0 8.6-.4c.4 0 1.3-.1 2.1-1.1.6-.7.8-2.3.8-2.3s.5-1.8.5-3.7V9.9c0-1.8-.5-3.7-.5-3.7zM9.8 15.2V8.6l6.3 3.3-6.3 3.3z"/>
        </svg>
        </Link>
        <Link href="https://www.instagram.com">
        <svg className="w-6 h-6 " viewBox="0 0 24 24">
          <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5zm10.25 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 9z"/>
        </svg>
        </Link>
        <Link href="https://www.x.com">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22.162 1.67 13.75 10.1l9.066 12.23h-2.71l-7.335-9.907-8.4 9.907H.82L9.63 14.2.77 1.67h2.8l6.87 9.273 7.9-9.273h3.822z"/>
          </svg>
        </Link>
        <Link href="https://www.facebook.com">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692V11.29h3.128V8.408c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.416h-3.12V24h6.116c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z"/>
          </svg>
        </Link>
      </div>
      <div className="flex flex-row gap-3 mt-2 ml-2">
        <div className="flex flex-col mb-10"><h4 className="font-bold ">Solutions</h4>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">Marketing</Link>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">Analytics</Link>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">Commerce</Link>
        </div>
        <div className="flex flex-col mb-10 ml:10 "><h4 className="font-bold ">Support</h4>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">Submit ticket</Link>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">Documentation</Link>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">Guides</Link>
        </div>
        <div className="flex flex-col mb-10 ml:10  "><h4 className="font-bold ">Company</h4>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">About</Link>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">Blog</Link>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">Job</Link>
        </div>
        <div className="flex flex-col mb-10 ml:10  "><h4 className="font-bold ">Legal</h4>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">Terms of service</Link>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">Privacy policy</Link>
        <Link href="/user" className="text-gray-500 hover:text-gray-200">License</Link>
        </div>
      </div>
   </div>
   
  )
}

export default Footer