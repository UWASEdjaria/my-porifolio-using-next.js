import './globals.css';
import React, { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Djaria Portfolio',
  description: 'Frontend Developer | UI/UX Designer Portfolio',
  keywords: ['Frontend', 'UI/UX', 'Developer', 'Portfolio', 'React', 'Next.js'],
  author: 'Uwase Djaria',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-purple-700 transition-all duration-300 hover:scale-105">
          {/* Title with Gradient */}
          <h1
            className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center 
                       bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 
                       bg-clip-text text-transparent shadow-lg transition-all duration-300 hover:scale-105 p-3"
          >
            Djaria<span className="text-white">.is.</span>coding
          </h1>

          {/* Navigation */}
          <nav className="flex space-x-6 md:ml-8 text-lg font-semibold transition-all duration-300 hover:scale-105">
            <Link href="/" className="hover:text-purple-400">
              Home
            </Link>
            <Link href="/about" className="hover:text-purple-400">
              About
            </Link>
            <Link href="/project" className="hover:text-purple-400">
              Project
            </Link>
            <Link href="/contact" className="hover:text-purple-400 transition">
              Contact
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="grow">{children}</main>

        {/* Footer */}
        <footer className="text-center text-white py-6 border-t border-purple-800">
          © {new Date().getFullYear()} Djaria. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
