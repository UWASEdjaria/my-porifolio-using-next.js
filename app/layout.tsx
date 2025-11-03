import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frontend Portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black font-sans min-h-screen">
        <div 
          className="w-full min-h-screen bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('/background-pic.jpg')" }}
        >
          <header className="flex flex-row pt-3 py-1 px-4 sm:p-2 md:p-4 lg:p-6 border-2 border-transparent hover:border-purple-800 transition-all duration-300 hover:scale-105 justify-between w-full">
            <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl shadow-lg font-bold text-purple-500 text-center">
              Djaria<span className="text-white">.is.</span>coding
            </h1>
            <nav className="flex shadow-lg space-x-4 items-center text-sm md:text-xl lg:text-2xl font-bold text-white px-4">
              <Link href="/about" className="hover:text-purple-400">About Me</Link>
              <Link href="/projects" className="hover:text-purple-400">Projects</Link>
              <Link href="/contact" className="hover:text-purple-400">Contact</Link>
            </nav>
          </header>
          
          <div className="flex justify-end p-4 sm:p-2 md:p-4 lg:p-6">
            <div className="flex flex-col justify-start min-h-screen p-5">
              <h2 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                Hello,
              </h2>
              <p className="text-2xl text-white md:text-3xl text-center mb-6">
                Frontend Developer | UI/UX Designer
              </p>
              <span className="space-x-4 p-4 text-center mx-auto">
                <a 
                  href="mailto:uwasedjaria41@gmail.com" 
                  className="bg-purple-600 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition"
                >
                  Hire me
                </a>
                <a 
                  href="/Uwase_Djaria_CV.pdf" 
                  download
                  className="bg-purple-600 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition"
                >
                  Download CV
                </a>
              </span>
              
              <h2 className="text-2xl font-bold rounded-lg sm:text-3xl md:text-4xl lg:text-5xl text-center p-6 sm:p-2 md:p-4 lg:p-6 text-white">
                Technical Skills
              </h2>
              
              <div className="flex flex-wrap gap-4 justify-center text-white italic font-bold p-2">
                <a 
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full sm:w-1/3 border-2 p-4 border-purple-800 text-white text-sm sm:text-xl md:text-2xl lg:text-xl rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105"
                >
                  HTML
                </a>
                <a 
                  href="https://tailwindcss.com/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full sm:w-1/3 border-2 p-4 border-purple-800 text-white text-sm sm:text-xl md:text-2xl lg:text-xl rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105"
                >
                  Tailwind CSS
                </a>
                <a 
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full sm:w-1/3 border-2 p-4 border-purple-800 text-white text-sm sm:text-xl md:text-2xl lg:text-xl rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105"
                >
                  JavaScript
                </a>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}