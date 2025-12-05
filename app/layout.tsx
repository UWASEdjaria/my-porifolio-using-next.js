'use client';

import './globals.css';
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Djaria Portfolio</title>
        <meta name="description" content="Frontend Developer | UI/UX Designer Portfolio" />
      </head>
      <body className="bg-black text-white font-sans min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-purple-700">
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Djaria.is.coding
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-lg font-semibold">
            <Link href="/" className="hover:text-purple-400">Home</Link>
            <Link href="/about" className="hover:text-purple-400">About</Link>
            <Link href="/project" className="hover:text-purple-400">Project</Link>
            <Link href="/skills" className="hover:text-purple-400">Skills</Link>
            <Link href="/contact" className="hover:text-purple-400">Contact</Link>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-black border-b border-purple-700 flex flex-col gap-3 px-6 py-4">
            <Link href="/" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/project" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>Project</Link>
            <Link href="/skills" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link href="/contact" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        )}

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
