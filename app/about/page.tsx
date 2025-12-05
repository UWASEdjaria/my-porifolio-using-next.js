import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div
      className="font-sans p-5 bg-cover bg-top min-h-screen"
      style={{ backgroundImage: "url('/images/jaja.jpg')" }}
    >
      {/* Overlay */}
      <div className="bg-black/30 min-h-screen flex justify-center">
        <main className="max-w-3xl w-full text-center pt-10 flex flex-col items-center gap-10">

            {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 
                         bg-gradient-to-r from-pink-700 via-purple-600 to-purple-900 
                         bg-clip-text text-transparent shadow-lg">
            About Me
          </h1>
          {/* Description */}
          <p className="text-white text-lg md:text-xl leading-relaxed">
            I am Djaria, a frontend developer creating responsive and easy-to-use websites. 
            I work with HTML, CSS, Tailwind, JavaScript, React, and Next.js. 
            I also have basic backend knowledge using Firebase and PostgreSQL and can 
            handle simple authentication and databases. I enjoy learning new skills and 
            improving step by step.
          </p>

          {/* Skills */}
          
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/skills" className="bg-purple-700 px-4 py-2 rounded text-white">view my skills →</Link>
  
          </div>

          {/* Experience */}
          <div className="w-full text-left mt-10 text-white">
            <h2 className="text-2xl font-bold mb-2">Experience & Learning</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Learning frontend development at SheCan Code Igire Rwanda</li>
              <li>Building small projects with React, Next.js, and Tailwind CSS</li>
              <li>Practicing backend basics with Firebase and PostgreSQL</li>
              <li>Focusing on responsive design and UI/UX principles</li>
            </ul>
          </div>

          {/* Goals */}
          <div className="w-full text-left mt-6 text-white">
            <h2 className="text-2xl font-bold mb-2">My Goals</h2>
            <p className="italic">
              I aim to become a professional frontend developer, work on real projects, 
              and create websites that are simple, functional, and user-friendly. 
              I enjoy learning new technologies and improving my skills step by step.
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}
