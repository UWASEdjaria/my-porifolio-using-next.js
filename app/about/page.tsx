import React from 'react';

export default function Page() {
  return (
    <div className="bg-black font-sans p-5">
      <main className="max-w-7xl mx-auto">
        {/* Back Home */}
       

        {/* About Me Section */}
        <section className="mt-5 flex flex-col md:flex-row gap-10">
          {/* Image on the left */}
          <div
            className="flex w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/images/about-pic.jpg')" }}
          ></div>

          {/* Text and Skills on the right */}
          <div className="flex-1 flex flex-col">
           <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-5
               bg-linear-to-r from-pink-700 via-purple-600 to-purple-900
               bg-clip-text text-transparent shadow-lg">
               About me
               </h1>

            <p className="text-white text-lg md:text-xl leading-relaxed">
              A frontend developer passionate about creating responsive and easy-to-use websites.
              Skilled in HTML, CSS, and JavaScript, and currently learning UI/UX design to combine
              clean code with modern design. Always exploring new tools and improving step by step,
              with the goal of building simple, creative, and meaningful digital experiences.
            </p>

            <h2 className="text-white text-3xl font-bold mt-6 mb-4 hover:underline">Skills</h2>
            <div className="flex flex-wrap gap-3 text-white italic">
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm hover:border-purple-500 transition-transform duration-300 hover:scale-105 cursor-pointer">HTML</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm hover:border-purple-500 transition-transform duration-300 hover:scale-105 cursor-pointer">CSS</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm hover:border-purple-500 transition-transform duration-300 hover:scale-105 cursor-pointer">Tailwind CSS</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm hover:border-purple-500 transition-transform duration-300 hover:scale-105 cursor-pointer">JavaScript</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm hover:border-purple-500 transition-transform duration-300 hover:scale-105 cursor-pointer">UI/UX Design</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
