import Image from "next/image";
import { Navbar } from "../components/NavBar";
import navItems from "../utils/NavItems";
import { useState } from "react";
import { database } from "../utils/firebaseConfig";
import { get, ref, push } from "firebase/database";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar navItems={navItems} className="custom-classname" />

      <div className="relative flex flex-col items-center justify-center w-full py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-transparent to-transparent opacity-50 blur-3xl"></div>
        <div className="relative z-10 max-w-4xl p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Contact Us</h2>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-400">We would love to hear from you!</p>

          <form className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100 focus:ring focus:ring-[#0000FF] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100 focus:ring focus:ring-[#0000FF] focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100 focus:ring focus:ring-[#0000FF] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                className="block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100 focus:ring focus:ring-[#0000FF] focus:outline-none"
                rows={4}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-[#0000FF] rounded-lg hover:bg-blue-600 focus:ring focus:ring-[#0000FF] focus:outline-none dark:bg-blue-400 dark:hover:bg-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
