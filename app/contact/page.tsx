import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen font-sans p-5">
      {/* Short About Me Section */}
      <div className="text-center mb-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 
                       italic bg-linear-to-r from-pink-600 via-purple-600 to-blue-600
                       bg-clip-text text-transparent">
          Glad You’re Here!
        </h1>
        <p className="text-white italic text-lg md:text-xl">
          I build modern, responsive websites and love creating clean user experiences. 
          Feel free to drop me a message below!
        </p>
      </div>

      {/* Contact Form */}
      <form className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-purple-600 text-2xl font-bold mb-6 text-center">
          Contact Me
        </h2>

        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          required
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-300"
        />

        <label htmlFor="email" className="sr-only">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          required
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-300"
        />

        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="message"
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
