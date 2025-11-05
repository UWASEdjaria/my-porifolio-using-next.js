import React from "react";

export default function Page() {
  return (
    <div
      className="font-sans p-5 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/images/jaja.jpg')",
      }}
    >
      {/* Overlay (for better readability) */}
      <div className="bg-black/30 min-h-screen">
        <main className="max-w-7xl mx-auto">
          {/* About Me Section */}
          <section className="pt-10 flex flex-col items-center text-center gap-10">
            {/* Title */}
            <h1
              className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-5
              bg-gradient-to-r from-pink-700 via-purple-600 to-purple-900
              bg-clip-text text-transparent shadow-lg"
            >
              About Me
            </h1>

            {/* Description */}
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl">
              A frontend developer passionate about creating responsive and
              easy-to-use websites. Skilled in HTML, CSS, and JavaScript, and
              currently learning UI/UX design to combine clean code with modern
              design. Always exploring new tools and improving step by step,
              with the goal of building simple, creative, and meaningful digital
              experiences.
            </p>

            {/* Skills Section */}
            <h2 className="text-4xl font-bold mt-8 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills
            </h2>

            {/* Skills Buttons */}
            <div className="flex flex-wrap justify-center gap-4 text-white italic font-bold">
              {[
                ["HTML", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
                ["CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
                ["Tailwind CSS", "https://tailwindcss.com/docs"],
                [
                  "JavaScript",
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                ],
                [
                  "UI/UX Design",
                  "https://www.interaction-design.org/literature/topics/ui-design",
                ],
                ["React", "https://react.dev/learn"],
                ["Next.js", "https://nextjs.org/docs"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                >
                  {name}
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
