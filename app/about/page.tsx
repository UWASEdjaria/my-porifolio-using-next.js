import React from "react";

export default function Page() {
  return (
    <div
      className="font-sans p-5 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/jaja.jpg')" }}
    >
      {/* Overlay */}
      <div className="bg-black/30 min-h-screen flex justify-center">
        <main className="max-w-7xl w-full text-center pt-10 flex flex-col items-center gap-10">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 
                         bg-linear-to-r from-pink-700 via-purple-600 to-purple-900 
                         bg-clip-text text-transparent shadow-lg">
            About Me
          </h1>

          {/* Description */}
          <p className="text-white text-lg md:text-xl max-w-3xl leading-relaxed">
            A frontend developer passionate about creating responsive and easy-to-use websites.
            Skilled in HTML, CSS, and JavaScript, and currently learning UI/UX design to combine
            clean code with modern design. Always exploring new tools and improving step by step,
            aiming to build simple, creative, and meaningful digital experiences.
          </p>

          {/* Skills */}
          <h2 className="text-4xl font-bold mt-8 mb-6 
                         bg-linear-to-r from-purple-600 to-pink-600 
                         bg-clip-text text-transparent">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              HTML
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              CSS
            </a>

            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              Tailwind CSS
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              JavaScript
            </a>

            <a
              href="https://www.interaction-design.org/literature/topics/ui-design"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              UI/UX Design
            </a>

            <a
              href="https://react.dev/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              React
            </a>

            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              Next.js
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
