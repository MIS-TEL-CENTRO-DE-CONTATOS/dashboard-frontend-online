import Link from "next/link";
import {
  FiLogIn,
  FiThumbsUp,
  FiUser,
  FiGrid,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className={`flex flex-col shadow-xl h-auto justify-between ml-2 rounded-xl  bg-gray-900 dark:bg-gray-800 animate-ease-in-out duration-300 ${
          isOpen ? "w-32" : "w-20"
        }`}
      >
        <div className="mb-10">
          <div className="mt-10">
            <ul>
              <li className="my-8 text-center">
                <a href="#">
                  <span className="h-auto w-auto flex text-gray-500 dark:text-gray-300 justify-center px-6 items-center hover:text-primaryTel dark:hover:text-white transition-colors duration-200">
                    <FiGrid className="" width={32} />
                    {isOpen && (
                      <div className="pl-2 font-semibold text-xs animate-fade-left animate-duration-600">
                        Dash
                      </div>
                    )}
                  </span>
                </a>
              </li>
              <li className="my-8 text-center">
                <a href="#">
                  <span className="h-auto w-auto flex text-gray-500 dark:text-gray-300 justify-center px-6 items-center hover:text-primaryTel dark:hover:text-white transition-colors duration-200">
                    <FiUser className="" width={32} />
                    {isOpen && (
                      <div className="pl-2 font-semibold text-xs animate-fade-left animate-duration-600">
                        User
                      </div>
                    )}
                  </span>
                </a>
              </li>
              <li className="my-8 text-center">
                <a href="#">
                  <span className="h-auto w-auto flex text-gray-500 dark:text-gray-300 justify-center  px-6 items-center hover:text-primaryTel dark:hover:text-white transition-colors duration-200">
                    <FiThumbsUp className="" width={32} />
                    {isOpen && (
                      <div
                        className={`pl-2 font-semibold text-xs animate-fade-left animate-duration-600`}
                      >
                        Feedback
                      </div>
                    )}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4">
          <Link href="/login" className="my-12">
            <span>
              <svg
                className="w-5 h-5 mx-auto text-gray-300 fill-current hover:text-red-500 transition-colors duration-200"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
                  fill="currentColor"
                ></path>
                {isOpen && (
                  <div
                    className={`pl-2 font-semibold text-xs animate-fade-left animate-duration-600`}
                  >
                    Logout
                  </div>
                )}
              </svg>
            </span>
          </Link>
          <span className="flex items-center mt-5 mb-2 justify-center ">
            <button
              onClick={toggleNavbar}
              className="transition-all duration-200"
            >
              <div className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                {isOpen ? (
                  <FiChevronLeft
                    width={32}
                    className="w-auto text-gray-300  text-2xl animate-spin animate-once animate-duration-1000 animate-ease-out "
                  />
                ) : (
                  <FiChevronRight
                    width={32}
                    className="w-auto text-gray-300  text-2xl animate-spin animate-once animate-duration-1000 animate-ease-out "
                  />
                )}
              </div>
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
}
