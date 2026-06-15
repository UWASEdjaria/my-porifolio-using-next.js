import React from 'react'

const skillsData = [
  {
    title: "HTML & CSS",
    description: "I build semantic, accessible web structures and create responsive layouts using modern CSS, Flexbox, and Grid."
  },
  {
    title: "Tailwind CSS",
    description: "I use Tailwind CSS for rapid, utility-first UI development, ensuring consistent and highly maintainable design systems."
  },
  {
    title: "JavaScript & TypeScript",
    description: "I build dynamic, type-safe web applications using modern ES6+ syntax and TypeScript for robust, scalable code."
  },
  {
    title: "React & Next.js",
    description: "I develop high-performance user interfaces using React and Next.js, focusing on reusable components, SSR, and SEO optimization."
  },
  {
    title: "TSOA & Express.js",
    description: "I architect type-safe RESTful APIs using Express.js and TSOA to generate clean, maintainable backend documentation and routes."
  },
  {
    title: "Prisma & PostgreSQL",
    description: "I manage complex data architectures using Prisma ORM to interact efficiently and securely with PostgreSQL databases."
  },
  {
    title: "UI/UX Design",
    description: "I leverage Figma to prototype user-centric interfaces, ensuring a seamless bridge between design and functional code."
  },
  {
    title: "Tools & Collaboration",
    description: "I am proficient in Git/GitHub for version control and Postman for API testing and development."
  }
];

function Skills() {
  return (
    <div className="bg-black min-h-screen font-sans p-5">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 
                     bg-gradient-to-r from-pink-400 via-purple-600 to-purple-900
                     bg-clip-text text-transparent shadow-lg">
        My Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-black border border-purple-500 rounded-xl shadow-md p-5 flex flex-col transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-xl font-bold mb-2 text-center
                           bg-gradient-to-r from-pink-700 via-purple-600 to-purple-900
                           bg-clip-text text-transparent shadow-lg">
              {skill.title}
            </h2>
            <p className="text-gray-400 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills