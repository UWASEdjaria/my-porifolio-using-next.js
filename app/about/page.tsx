import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div
      className="font-sans p-5 bg-contain bg-right bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/dev cartoon.jpeg')" }}
    >
      {/* Overlay */}
      <div className="bg-black/30 min-h-screen flex justify-center">
        <main className="max-w-6xl w-full pt-10 flex flex-row items-start gap-10">
          <div className="w-1/2 flex flex-col items-start gap-10">

            {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 
                         bg-gradient-to-r from-pink-700 via-purple-600 to-purple-900 
                         bg-clip-text text-transparent shadow-lg text-left">
            About Me
          </h1>
          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed text-left">
              I am Djaria, a Full Stack Developer passionate about building end-to-end web applications. 
              My expertise spans the entire stack, from creating responsive frontend interfaces with React and Next.js 
              to architecting robust backend systems using Node.js, TSOA, Prisma, and PostgreSQL. 
              I enjoy solving complex problems and delivering high-quality, user-friendly digital solutions.
            </p>

          {/* Skills */}
          
          <div className="flex flex-wrap justify-start gap-3">
            <Link href="/skills" className="bg-purple-700 px-4 py-2 rounded text-white transition-all duration-300 transform hover:scale-105">view my skills →</Link>
  
          </div>

          {/* Experience */}
          <div className="w-full text-left mt-10 text-gray-400">
            <h2 className="text-2xl font-bold mb-2">Experience & Expertise</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>Full Stack development with React, Next.js, and TypeScript</li>
                <li>Backend development using Express.js, TSOA, and Prisma ORM</li>
                <li>Database management with PostgreSQL</li>
                <li>Collaborating on team-based real-world projects</li>
            </ul>
          </div>

          {/* Goals */}
          <div className="w-full text-left mt-8 text-gray-400">
            <h2 className="text-3xl font-bold mb-4">My Goals</h2>
            <p className="text-lg leading-relaxed italic">
                My goal is to leverage my full-stack skillset to build scalable and impactful digital infrastructure. 
                I am dedicated to continuous improvement and am eager to contribute to innovative projects 
                that solve real-world challenges.
            </p>
          </div>

          </div>
          <div className="w-1/2"></div>
        </main>
      </div>
    </div>
  );
}
