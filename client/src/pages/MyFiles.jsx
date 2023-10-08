import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import axios from 'axios';
import { BACKEND_URL } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyFiles = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const isAuth = Boolean(token);

  const navigate = useNavigate();
  const [userFiles, setUserFiles] = useState([]);

  useEffect(() => {
    const getUserFilesData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/file/${user._id}`);
        console.log(res.data);
        setUserFiles(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserFilesData();
  }, [user._id]);

  // Function to copy URL to clipboard
  const copyToClipboard = (url) => {
    const el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('URL copied to clipboard!');
  };

  // const downloadFile = () => {
  //   const url =
  //     'https://firebasestorage.googleapis.com/v0/b/farmart-dc925.appspot.com/o/cloud-upload-a30f385a928e44e199a62210d578375a.jpg?alt=media&token=02c6a6d9-58a4-46c7-99db-05fdb450bd48&_gl=1*149b8zj*_ga*MTQzNjY2NDUyMC4xNjk2NjY4MzA0*_ga_CW55HF8NVT*MTY5Njc2NDA2NC40LjEuMTY5Njc2NDEwMi4yMi4wLjA.';
  //   const filename = 'pdfbrowser.png';
  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`Network response was not ok: ${response.status}`);
  //       }
  //       return response.blob();
  //     })
  //     .then((blob) => {
  //       const blobUrl = window.URL.createObjectURL(new Blob([blob]));
  //       const a = document.createElement('a');
  //       a.href = blobUrl;
  //       a.setAttribute('download', filename);
  //       document.body.appendChild(a);
  //       a.click();
  //       a.remove();
  //     })
  //     .catch((error) => {
  //       console.error('Error downloading file:', error);
  //     });
  // };

  

  const firebaseUrl = async () => {
    const res = await axios.get(
      'https://firebasestorage.googleapis.com/v0/b/farmart-dc925.appspot.com/o/cloud-upload-a30f385a928e44e199a62210d578375a.jpg?alt=media&token=02c6a6d9-58a4-46c7-99db-05fdb450bd48'
    );
    console.log(res.data);
  };

  // const downloadFile = (url, filename) => {
  //   const anchor = document.createElement('a');
  //   anchor.href = url;
  //   anchor.download = filename;
  //   anchor.style.display = 'none';

  //   document.body.appendChild(anchor);
  //   anchor.click();

  //   document.body.removeChild(anchor);
  // };

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-[81vh]">
        <div className="grid justify-center sm:grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {userFiles.map((file, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 mx-auto mb-8 w-full max-w-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="/icons/ppt.png"
                  alt="File Icon"
                  className="w-16 h-14"
                />
                <div className="text-center">
                  <div
                    className="text-2xl font-medium text-gray-800"
                    style={{ maxWidth: '200px', wordWrap: 'break-word' }}
                  >
                    {/* Wrap the file name in a div */}
                    <div>{file.filename}</div>
                  </div>
                  <p className="text-xl text-gray-600">
                    File Size: {file.file_size} KB
                  </p>
                </div>
              </div>

              {/* Shortlink and actions */}
              <div className="flex items-center justify-between mt-6">
                {/* Shortlink */}
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-200 p-3 rounded-lg">
                    {/* Shortlink goes here */}
                    <span>{file.shortlink}</span>
                  </div>
                </div>

                {/* Copy URL icon */}
                <button
                  onClick={() => {
                    copyToClipboard(file.shortlink); // Copy the URL when clicked
                  }}
                  className="bg-blue-500 text-white ml-4 px-4 py-2 rounded-md"
                >
                  Copy URL
                </button>
              </div>

              {/* Preview and Download buttons */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => {
                    // Implement preview logic here
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Preview
                </button>
                <button
                  onClick={() => {
                    firebaseUrl(); // Trigger file download
                  }}
                  className="bg-purple-500 text-white px-4 py-2 rounded-md"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyFiles;
