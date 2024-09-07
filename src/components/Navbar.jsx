import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost text-2xl">Call My Lawyer</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1" style={{ zIndex: 6546 }}>
            <li>
              <details>
                <summary>Articles</summary>
                <ul className="p-2">
                  <NavLink
                    to="/inProgress"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    <li>
                      <a>Article 1</a>
                    </li>
                  </NavLink>
                  <NavLink
                    to="/inProgress"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    <li>
                      <a>Article 2</a>
                    </li>
                  </NavLink>

                  <NavLink
                    to="/inProgress"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    <li>
                      <a>Article 3</a>
                    </li>
                  </NavLink>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Search</summary>
                <ul className="p-2">
                  <li>
                    <a>Act</a>
                  </li>
                  <li>
                    <a>Dictionary</a>
                  </li>

                  <li>
                    <a>Web</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Workspace</summary>
                <ul className="p-2">
                  <li>
                    <a>Creat Document</a>
                  </li>
                  <li>
                    <a>Create Pdf</a>
                  </li>

                  <li>
                    <a>Import File Drafts 3</a>
                  </li>
                  <li>
                    <a>Files</a>
                  </li>
                  <li>
                    <a>Call my lawyer files</a>
                  </li>
                  <li>
                    <a>Case Details</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Planner</summary>
                <ul className="p-2">
                  <li>
                    <a>Diary</a>
                  </li>
                  <li>
                    <a>Reminder</a>
                  </li>

                  <li>
                    <a>Calendar</a>
                  </li>
                  <li>
                    <a>Case</a>
                  </li>
                </ul>
              </details>
            </li>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <li>
                <a>Notes</a>
              </li>
            </NavLink>
            <li>
              <details>
                <summary>Message</summary>
                <ul className="p-2">
                  <li>
                    <a>View Messages</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Profile</summary>
                <ul className="p-2">
                  <li>
                    <a>Login</a>
                  </li>
                  <li>
                    <a>Register</a>
                  </li>
                </ul>
              </details>
            </li>
            <NavLink
              to="/chatbot"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <li>
                <a>Chatbot</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            <a className="btn">Home</a>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
