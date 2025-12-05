
import React from 'react'

function Skills() {
  return (
    <div>
        
{/* Skills Section */}
<div className="py-10">
  <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6
             bg-gradient-to-r from-pink-700 via-purple-600 to-purple-900
             bg-clip-text text-transparent shadow-lg">
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
    <button
      className="border-2 px-4 sm:px-6 py-2 sm:py-3 border-purple-800 text-sm sm:text-lg rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >
      HTML
    </button>

    <button
      className="border-2 px-4 sm:px-6 py-2 sm:py-3 border-purple-800 text-sm sm:text-lg rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >
      Tailwind CSS
    </button>

    <button
      className="border-2 px-4 sm:px-6 py-2 sm:py-3 border-purple-800 text-sm sm:text-lg rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >
      JavaScript
    </button>

    <button
      className="border-2 px-4 sm:px-6 py-2 sm:py-3 border-purple-800 text-sm sm:text-lg rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >
      React
    </button>

    <button
      className="border-2 px-4 sm:px-6 py-2 sm:py-3 border-purple-800 text-sm sm:text-lg rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >
      Next.js
    </button>
    
    <button className="border-2 border-purple-700 px-4 py-2 rounded-full text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300"
    >Firebase
    </button>
    
    <button className="border-2 border-purple-700 px-4 py-2 rounded-full text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300">PostgreSQL</button>

  </div>
</div>

    </div>
  )
}

export default Skills
