import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogout } from '../state';

function Navbarr({ setSearchQuery }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
  const [query, setQuery] = useState('');
  const isAuth = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const name = user?.name;

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleUserNameClick = () => {
    setShowLogoutDropdown(!showLogoutDropdown);
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  };

  

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
        <div className="md:block">
          <div className="flex">
            <input
              type="text"
              className="w-60 px-4 py-2 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Search..."
              value={query}
              onChange={handleSearchChange}
            />
            
          </div>
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
                className="cursor-pointer text-2xl block py-3 pl-3 pr-4 rounded hover:bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 text-white"
                onClick={() => {
                  navigate('/home');
                }}
              >
                Home
              </div>
              <div
                className="cursor-pointer text-2xl block py-3 pl-3 pr-4 rounded hover:bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 text-white"
                onClick={() => {
                  navigate('/myfiles');
                }}
              >
                My Files
              </div>

              <div className="relative">
                <button
                  className="text-2xl pt-0.5 pb-1 px-4 rounded-lg bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500"
                  onClick={handleUserNameClick}
                >
                  {name}
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
                className="cursor-pointer text-2xl block py-3 pl-3 pr-4 rounded hover:bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 text-white"
                onClick={() => {
                  navigate('/');
                }}
              >
                Home
              </div>
              <div
                className="cursor-pointer text-2xl block py-3 pl-3 pr-4 rounded hover:bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 text-white"
                onClick={() => {
                  navigate('/myfiles');
                }}
              >
                My Files
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

export default Navbarr;
