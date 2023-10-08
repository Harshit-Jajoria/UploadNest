import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogout } from '../state';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
  const isAuth = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const name = user?.name;
  const role = user?.role;

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleUserNameClick = () => {
    setShowLogoutDropdown(!showLogoutDropdown);
  };

  const isFaculty = role === 'faculty'; // Check if the role is 'faculty'

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5694/5694744.png"
            className="h-10 mr-3 bg-white rounded-lg"
            alt="Flowbite Logo"
          />
          <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
          UploadNest
          </span>
        </div>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isNavbarOpen ? 'block' : 'hidden'
          } md:flex md:w-auto md:block w-full`}
          id="navbar-default"
        >
          {isAuth && name ? (
            <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
              <div
                className="cursor-pointer text-2xl block py-3 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
                onClick={() => {
                  navigate('/home');
                }}
              >
                Home
              </div>
              <div
                className="cursor-pointer text-2xl block py-3 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
                onClick={() => {
                  navigate('/myfiles');
                }}
              >
                My Files
              </div>

              {isFaculty && ( // Show the "Add Question" div if the user is a faculty
                <div
                  className="cursor-pointer text-2xl block py-3 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
                  onClick={() => {
                    navigate('/addquestion');
                  }}
                >
                  Add Question
                </div>
              )}

              <div className="relative">
                <button
                  className="text-2xl pt-0.5 pb-1 px-4 rounded-lg bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500"
                  onClick={handleUserNameClick}
                >
                  {name} {/* Display the user's name */}
                  <svg
                    className="w-5 h-5 inline-block ml-1 cursor-pointer"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={handleUserNameClick}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showLogoutDropdown && (
                  <div className="absolute mt-2 py-2 w-32 bg-white rounded-lg shadow-xl z-20 left-0 sm:right-0">
                    <button
                      onClick={() => dispatch(setLogout())}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
              <div
                className="cursor-pointer text-2xl block py-3 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
                onClick={() => {
                  navigate('/');
                }}
              >
                Home
              </div>
              <div
                className="cursor-pointer text-2xl block py-3 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
                onClick={() => {
                  navigate('/scoreboard');
                }}
              >
                ScoreBoard
              </div>

              <button
                className="text-2xl pt-0.5 pb-1 px-4 rounded-lg bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500"
                onClick={() => navigate('/signin')}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
