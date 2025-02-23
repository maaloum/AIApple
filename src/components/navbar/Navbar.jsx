import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-4/6">
            <div className="flex items-center gap-10 my-12">
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center"
                >
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-8 w-28 text-primary"
                  />
                </a>
              </div>
              <div className="hidden lg:flex gap-8">
                <a href="/" className="hover:text-primary">
                  About
                </a>
                <a href="/" className="hover:text-primary">
                  Features
                </a>
                <a href="/" className="hover:text-primary">
                  Price
                </a>
                <a href="/" className="hover:text-primary">
                  Demo
                </a>
                <a href="/" className="hover:text-primary">
                  Book
                </a>
                <a href="/" className="hover:text-primary">
                  FAQ
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="flex gap-3">
                  <button className="hidden md:inline-block bg-secondary text-white border border-secondary hover:bg-secondary hover:text-gray focus:outline-none focus:ring-2 focus:ring-blue-900 font-bold py-2 px-6 rounded-lg">
                    Sign Up
                  </button>

                  <button className="hidden md:inline-block bg-white text-gray-600 border border-secondary hover:bg-gray hover:text-secondary hover:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 font-bold py-2 px-6 rounded-lg">
                    Sign In
                  </button>
                </div>
              </div>
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            toggleMenu ? "h-full" : "h-0"
          } transition-all duration-300`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="/" className="hover:text-primary">
                About
              </a>
              <a href="/" className="hover:text-primary">
                Features
              </a>
              <a href="/" className="hover:text-primary">
                Price
              </a>
              <a href="/" className="hover:text-primary">
                Demo
              </a>
              <a href="/" className="hover:text-primary">
                Book
              </a>
              <a href="/" className="hover:text-primary">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
