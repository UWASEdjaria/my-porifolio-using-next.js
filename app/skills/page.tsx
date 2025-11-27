
import React from 'react'

function Skills() {
  return (
    <div>
        
{/* Skills Section */}
<div className="py-10">
  <h2 className="text-center text-3xl font-bold mb-6">
    Skills
  </h2>
<p className="text-center max-w-2xl mx-auto text-sm sm:text-lg md:text-xl 
             italic text-gray-300 leading-relaxed p-4">
  I have skills in building websites using HTML, CSS, Tailwind, JavaScript, React, 
  and Next.js. I also have basic backend knowledge using Firebase and PostgreSQL, 
  and I can create simple authentication features and work with databases. I can 
  make clean pages, responsive designs, and simple user interfaces. I am still 
  learning every day, and I enjoy improving my frontend and backend skills step 
  by step.
</p>

  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center text-white font-bold italic p-2">

    {/* Skill Item */}
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 px-4 sm:px-6 py-2 sm:py-3 border-purple-800 text-sm sm:text-lg rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >
      HTML
    </a>

    <a
      href="https://tailwindcss.com/docs"
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 px-4 sm:px-6 py-2 sm:py-3 border-purple-800 text-sm sm:text-lg rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >
      Tailwind CSS
    </a>

    <a
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 px-4 sm:px-6 py-2 sm:py-3 border-purple-800 text-sm sm:text-lg rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >
      JavaScript
    </a>

    <a
      href="https://react.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 px-4 sm:px-6 py-2 sm:py-3 border-purple-800 text-sm sm:text-lg rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >
      React
    </a>

    <a
      href="https://nextjs.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 px-4 sm:px-6 py-2 sm:py-3 border-purple-800 text-sm sm:text-lg rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >
      Next.js
    </a>

  </div>
</div>

    </div>
  )
}

export default Skills
