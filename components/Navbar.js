import hotkeys from "hotkeys-js";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 animate__animated animate__flash bg-transparent text-xs">
      <div className="navbar-start mx-auto">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="font-bold lg:hover:shadow-md md:hover:shadow-md" href="/">
                Home
              </a>
            </li>
            <li tabIndex="0">
              <a className="lg:hover:shadow-md md:hover:shadow-md" href="/#About">
                About
              </a>
            </li>
            <li>
              <a className="lg:hover:shadow-md md:hover:shadow-md" href="/#Project">
                Project
              </a>
            </li>
            <li>
              <a className="lg:hover:shadow-md md:hover:shadow-md" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <div className="flex justify-center">
                <span>
                  <svg id="darkThemeBtn" className="w-6 h-6 ml-1 text-gray-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>
                </span>
                {/* <span>
            <svg id="lightThemeBtn" className="w-6 h-6 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </span> */}
                <span data-toggle-theme="autumn,dark" data-act-class="pl-0" className="m-2">
                  <input type="checkbox" className="toggle" />
                </span>
                {/* <span className="rounded-full w-3 h-3 m-1 bg-accent"> </span> */}
                <span>
                  <svg id="lightThemeBtn" className="w-6 h-6 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-md" href="/pages/index.js">
          Naufal7
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 bg-">
          <li>
            <a className="font-bold lg:hover:shadow-md md:hover:shadow-md" href="/">
              <kbd className="kbd kbd-sm">H</kbd>
              Home
            </a>
          </li>
          <li tabIndex="0">
            <a className="lg:hover:shadow-md md:hover:shadow-md" href="/#About">
              <kbd className="kbd kbd-sm">A</kbd>
              About
            </a>
          </li>
          <li>
            <a className="lg:hover:shadow-md md:hover:shadow-md" href="/#Project">
              <kbd className="kbd kbd-sm">P</kbd>
              Project
            </a>
          </li>
          <li>
            <a className="lg:hover:shadow-md md:hover:shadow-md" href="/blog">
              <kbd className="kbd kbd-sm">B</kbd>
              Blog
            </a>
          </li>
        </ul>
        <div className="flex justify-center">
          <span>
            <svg id="darkThemeBtn" className="w-6 h-6 ml-1 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </span>
          {/* <span>
            <svg id="lightThemeBtn" className="w-6 h-6 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </span> */}
          <span data-toggle-theme="autumn,dark" data-act-class="pl-0" className="">
            <input type="checkbox" className="toggle" />
          </span>
          {/* <span className="rounded-full w-3 h-3 m-1 bg-accent"> </span> */}
          <span>
            <svg id="lightThemeBtn" className="w-6 h-6 mr-1 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </span>
        </div>
      </div>

      <div className="navbar-end gap-3">
        <a className="btn text-md lg:hover:shadow-md" href="https://discord.com/users/718259600117465158">
          <kbd className="kbd kbd-sm mr-2 text-[#000000]">C</kbd>
          Contact Me
        </a>
      </div>
    </div>
  );
}
