"use client";

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">MyApp</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:underline">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:underline">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
