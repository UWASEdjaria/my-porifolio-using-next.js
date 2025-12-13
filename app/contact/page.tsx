import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen font-sans p-5">
      <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen gap-10 max-w-6xl mx-auto pt-10">
        
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
      
      {/* About Me Section */}
      <div className="text-center mb-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 italic
                       bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600
                       bg-clip-text text-transparent">
          Glad You’re Here!
        </h1>
        <p className="text-gray-400 italic text-lg md:text-xl mb-6">
          I build modern, responsive websites and love creating clean user experiences. 
          Feel free to contact me through any of the platforms below!
        </p>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Let&#39;s Work Together</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I&#39;m always excited to collaborate on new projects and bring creative ideas to life. 
            Whether you need a website, want to discuss a project, or just want to connect, 
            I&#39;d love to hear from you!
          </p>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-gray-400">
            <span className="text-purple-400 font-semibold">Email:</span> uwasedjaria41@gmail.com
          </p>
          <p className="text-gray-400 mt-2">
            <span className="text-purple-400 font-semibold">Location:</span> Kigali, Rwanda
          </p>
        </div>
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
          href="https://wa.me/250789601944" 
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="text-green-500 text-5xl hover:text-green-400 transition-colors duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>

        </div>
        
        {/* Right side - Contact Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
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
      </div>
    </div>
  );
}
