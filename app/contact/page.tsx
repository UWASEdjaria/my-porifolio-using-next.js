import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen font-sans p-5">
      
      {/* About Me Section */}
      <div className="text-center mb-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 italic
                       bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600
                       bg-clip-text text-transparent">
          Glad You’re Here!
        </h1>
        <p className="text-white italic text-lg md:text-xl">
          I build modern, responsive websites and love creating clean user experiences. 
          Feel free to contact me through any of the platforms below!
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-8 mb-8">
        <a
          href="https://github.com/UWASEdjaria"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="text-white text-5xl hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/uwase-djaria-109a6727b/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="text-blue-600 text-5xl hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100094083582365"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          className="text-blue-500 text-5xl hover:text-blue-300 transition-colors duration-300"
        >
          <FaFacebook />
        </a>

        <a
          href="https://wa.me/250XXXXXXXXX" // replace XXXXXXXXX with your actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="text-green-500 text-5xl hover:text-green-400 transition-colors duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Contact Form */}
      <form className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-purple-600 text-2xl font-bold mb-6 text-center">
          Send me a message
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-300"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-300"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-300"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded font-bold transition-colors duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
}
