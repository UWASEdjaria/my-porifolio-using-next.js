
import React from 'react'

const skillsData = [
  {
    title: "HTML",
    description: "I create semantic and well-structured web pages using HTML5. I understand proper markup and accessibility standards for modern web development."
  },
  {
    title: "CSS", 
    description: "I style websites with modern CSS techniques including flexbox and grid layouts. I focus on creating responsive designs that work across all devices."
  },
  {
    title: "Tailwind CSS",
    description: "I use Tailwind CSS for rapid UI development with utility-first classes. This helps me build consistent and maintainable user interfaces quickly."
  },
  {
    title: "JavaScript",
    description: "I write JavaScript to add interactivity and dynamic functionality to web applications. I work with DOM manipulation, events, and modern ES6+ features."
  },
  {
    title: "React",
    description: "I build user interfaces using React components and hooks. I create reusable components and manage application state effectively."
  },
  {
    title: "Next.js",
    description: "I develop React applications using Next.js for better performance and SEO. I work with routing, server-side rendering, and static site generation."
  },
  {
    title: "Firebase",
    description: "I implement user authentication and real-time features using Firebase. I can set up login systems and manage user data securely."
  },
  {
    title: "PostgreSQL",
    description: "I have basic knowledge of PostgreSQL for simple database operations. I'm learning how databases work and store information."
  },
  {
    title: "Figma",
    description: "I use Figma for basic UI design and creating simple layouts. I'm learning to design user interfaces and improve my design skills."
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
