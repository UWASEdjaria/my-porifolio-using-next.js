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
      <div className="flex justify-end p-4 sm:p-2 md:p-4 lg:p-6">
        <div className="flex flex-col justify-start min-h-screen p-5">
          <h2 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Hello,
          </h2>
          <p className="text-2xl text-white md:text-3xl text-center mb-6">
            Frontend Developer | UI/UX Designer
          </p>
          <span className="space-x-4 p-4 text-center mx-auto">
            <a 
              href="mailto:uwasedjaria41@gmail.com" 
              className=" bg-linear-to-r from-pink-800 via-purple-900 to-blue-900  text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition"
            >
              Hire me
            </a>
            <a 
              href="/DJARIA UWASE frontend cv.pdf" 
              download
              className=" bg-linear-to-r from-pink-800 via-purple-900 to-blue-900  text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition"
            >
              Download CV
            </a>
          </span>

          <h2 className="text-2xl font-bold rounded-lg sm:text-3xl md:text-4xl lg:text-5xl text-center p-6 sm:p-2 md:p-4 lg:p-6 text-white">
            Technical Skills
          </h2>

         
        </div>
      </div>
    </div>
  );
}
