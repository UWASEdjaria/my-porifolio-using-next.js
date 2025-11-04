import Image from 'next/image';

// Project type
interface Project {
  title: string;
  img: string;
  url: string;
}

// Featured projects
const projects: Project[] = [
  { title: 'Movie Explorer', img: '/images/movieExplorer.png', url: 'https://movie-explorer-five-topaz.vercel.app/' },
  { title: 'E-Commerce Homepage', img: '/images/e-commerce.png', url: 'https://static-e-commerce-homepage-two.vercel.app/' },
  { title: 'Developer Dashboard', img: '/images/developerDashboard.png', url: 'https://github.com/UWASEdjaria/-Developer-Dashboard-' },
  { title: 'To-Do List', img: '/images/todolist.png', url: 'https://to-do-list-by-react-theta.vercel.app/' },
  { title: 'Task Management Board', img: '/images/taskManagement.png', url: 'https://github.com/UWASEdjaria/TASK-MANAGEMENT-BOARD' },
];

// Project Card
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
      <div className="relative h-48 w-full">
        <Image src={project.img} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold mb-1">{project.title}</h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:underline text-sm"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

// Projects page
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-500">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
