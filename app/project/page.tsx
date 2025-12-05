import Image from "next/image";

const projectsData = [
  {
    title: "Movie Explorer",
    image: "/images/movieExplorer.png",
    description: "Explore movies with search, filters, and details using React.",
    link: "https://movie-explorer-five-topaz.vercel.app/",
  },
  {
    title: "E-Commerce Homepage",
    image: "/images/e-commerce.png",
    description: "A clean, responsive e-commerce homepage UI built with modern design.",
    link: "https://static-e-commerce-homepage-two.vercel.app/",
  },
  {
    title: "Freelancer Dashboard",
    image: "/images/freelancerDashboard.png", // Make sure this image exists in /public/images
    description: "A React TypeScript dashboard for freelancers to track projects, earnings, and tasks.",
    link: "https://freelance-dashboard-react-type-script-oma4j7cim.vercel.app/",
  },
  {
    title: "Developer Dashboard",
    image: "/images/developerDashboard.png",
    description: "A dashboard showing weather, GitHub stats, and other developer metrics.",
    link: "https://github.com/UWASEdjaria/-Developer-Dashboard-",
  },
  {
    title: "To-Do List App",
    image: "/images/todolist(drag and drop).png",
    description: "A React To-Do List app for managing tasks with drag-and-drop features.",
    link: "https://to-do-list-by-react-theta.vercel.app/",
  },
  {
    title: "Task Management Board",
    image: "/images/taskManagement.png",
    description: "A task management board for organizing projects and tasks efficiently.",
    link: "https://github.com/UWASEdjaria/TASK-MANAGEMENT-BOARD",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-black min-h-screen font-sans p-5">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 
                     bg-gradient-to-r from-pink-400 via-purple-600 to-purple-900
                     bg-clip-text text-transparent shadow-lg">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black border border-purple-500 rounded-xl shadow-md p-5 flex flex-col transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-48 sm:h-40 mb-4 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold  mb-2 text-center
                           bg-gradient-to-r from-pink-700 via-purple-600 to-purple-900
                           bg-clip-text text-transparent shadow-lg">
              {project.title}
            </h2>
            <p className="text-gray-600 text-center">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
