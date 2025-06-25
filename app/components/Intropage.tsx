import React from 'react';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Intropage = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="font-bold text-6xl text-black text-center mb-10">About Me</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <Image
            src="/profilepicture.jpeg"
            alt="profile image"
            width={400}
            height={400}
            className="rounded-full border-4 border-black object-cover"
          />
          <div className="flex space-x-6 mt-5">
            <a href="https://github.com/Hisaan2004" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 text-gray-800 hover:text-black" />
            </a>
            <a href="www.linkedin.com/in/hisaan-sakhawat-149894300" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 text-gray-800 hover:text-black" />
            </a>
            <a href="mailto:@example.hisaan.sakhawat@gmail.com">
              <EnvelopeIcon className="w-6 h-6 text-gray-800 hover:text-black" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block w-px h-60 bg-gray-400"></div>
        <div className="flex flex-col max-w-xl text-center lg:text-left">
          <p className="lg:text-4xl font-semibold mb-2 text-black">Hi, I&apos;m Hisaan Sakhawat</p>
          <p className="text-black text-2xl mb-4">
            A Computer Science student passionate about crafting modern, user-friendly web experiences.
            I enjoy turning ideas into real-world projects through clean, responsive design and interactive functionality.
            Whether it&apos;s frontend interfaces or backend logic, I love building things that are both beautiful and functional.
          </p>
          <a
            href="/hisaan(3).pdf"
            download
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-fit self-center lg:self-start"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intropage;
