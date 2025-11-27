import Link from "next/link";
import React from "react";


export default function Page() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background pic.jpg')" }}
    >
      {/* Header */}
      <header className="flex flex-row pt-3 py-1 px-4 sm:p-2 md:p-4 lg:p-6 transition-all duration-300 hover:scale-105 justify-between w-full">
        
        
      </header>

      {/* Main Content */}
      <div className="flex justify-center md:justify-end p-4 md:p-6 w-full">
        <div className="flex flex-col justify-start min-h-screen p-5 max-w-2xl">
          <h2 className="text-3xl text-purple-600 md:text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Hello,
          </h2>
          <p className="text-lg text-white sm:text-xl md:text-2xl text-center mb-6">
            Frontend Developer | UI/UX Designer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:uwasedjaria41@gmail.com" 
              className="bg-linear-to-r from-pink-800 via-purple-900 to-blue-900 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition text-center"
            >
              Hire me
            </a>
            <a 
              href="/DJARIA UWASE frontend cv.pdf" 
              download
              className="bg-linear-to-r from-pink-800 via-purple-900 to-blue-900 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition text-center"
            >
              Download CV
            </a>
          </div>
          <div className="flex justify-center">
  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center text-white font-bold italic p-2">
    <p className="text-2xl relaxed-leading md:text-gray-400 text-white pl-2 italic">I create beautiful, user-friendly websites that combine design and code. Feel free to reach out and connect!</p>
    <Link href="/project" className="border-2 border-purple-700 px-4 py-2 rounded-full text-white">Explore for more →</Link>
         </div>
         </div>
        </div>
      </div>
    </div>
  );
}
