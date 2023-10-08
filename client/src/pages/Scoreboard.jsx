import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../constants';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Scoreboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint that returns user scores in descending order
    axios
      .get(`${BACKEND_URL}/scoreboard`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data: ', error);
      });
  }, []);

  if (!users) return null;

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-200 p-8 rounded-lg w-11/12 lg:w-8/12 xl:w-6/12">
        <h1 className="text-3xl font-bold mb-6 text-black">Scoreboard</h1>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-gray-200">
                <td className="px-4 py-2">{user.name.toUpperCase()}</td>
                <td className="px-4 py-2">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Scoreboard;
