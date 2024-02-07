"use strict";

import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Image src="/Logo.png" alt="Logo" width={100} height={80} />
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="About">About</Link>
        <Link href="/features">Features</Link>
        <Link href="/plans">Plans</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href="/signup"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
