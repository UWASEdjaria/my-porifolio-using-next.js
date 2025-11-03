import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen font-sans p-5">
      <Link
        href="/"
        className="text-white border-2 border-purple-800 rounded-lg p-2 hover:border-purple-500 font-bold italic inline-block mb-6"
      >
        <small>&larr; Back Home</small>
      </Link>

      <form className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-purple-600 text-2xl font-bold mb-4 text-center">
          Contact Us
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white focus:outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white focus:outline-none"
        />

        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white focus:outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
