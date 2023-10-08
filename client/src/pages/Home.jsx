import React, { useEffect, useRef, useState } from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import axios from 'axios';
import { BACKEND_URL } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import uploadFile from '../firebase/uploadFile';

const Home = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const isAuth = Boolean(token);

  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const inputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = e.target.files; // Get the selected files
    if (files.length > 0) {
      console.log('Uploaded Files:', files);

      setSelectedFiles([...selectedFiles, files[0]]);
    }
  };

  const formatFileSize = (size) => {
    if (size < 1024 * 1024) {
      // Less than 1 MB, display in KB
      return `${(size / 1024).toFixed(2)} KB`;
    } else {
      // Display in MB
      return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    }
  };

  const handleSubmit = async () => {
    if (selectedFiles) {
      const date = new Date();
      const timestamp = date.toISOString();
      const fileName = `picture-${timestamp}-${selectedFiles[0].name}`;

      try {
        const imageUrl = await uploadFile(selectedFiles[0], fileName);
        const res = await axios.post(`${BACKEND_URL}/add-file`, {
          userId: user._id,
          filename: selectedFiles[0].name,
          file_size: selectedFiles[0].size,
          file_type: selectedFiles[0].type,
          link: imageUrl,
        });
        console.log(res.data);

      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.error('No file selected.');
    }
  };

  const handleImageDivClick = () => {
    inputRef.current.click();
  };

  const handleClick = async (item) => {
    if (!isAuth) {
      navigate('/signin');
    }

    try {
      const res = await axios.get(`${BACKEND_URL}/questions/${item.text}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.data;
      navigate('/quiz', { state: { questions: data } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-[81vh] flex flex-col">
        <div className="upperHero h-2/5 py-10 flex flex-col justify-center items-center">
          <h1 className="text-2xl text-white text-center mb-2 md:text-3xl">
            UploadNest: Elevating Your File Sharing Experience - Store, Share,
            and Simplify!
          </h1>
        </div>

        <div
          className="flex justify-center items-center mb-4"
          onClick={handleImageDivClick}
        >
          <div className="flex flex-col items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/farmart-dc925.appspot.com/o/cloud-upload-a30f385a928e44e199a62210d578375a.jpg?alt=media&token=02c6a6d9-58a4-46c7-99db-05fdb450bd48&_gl=1*8vaef5*_ga*MTQzNjY2NDUyMC4xNjk2NjY8Mc3A0*_ga_CW55HF8NVT*MTY5Njc0MTQ1Mi4yLjEuMTY5Njc0NTk4MC4zMC4wLjA."
              alt=""
              className="w-96 h-64"
            />
            <h1 className="text-2xl text-white text-center mb-2 md:text-3xl">
              Upload Your Files Here
            </h1>
          </div>
          <input
            type="file"
            id="myFile"
            name="filename"
            onChange={handleFileUpload}
            ref={inputRef}
            style={{ display: 'none' }}
          />
        </div>

        {selectedFiles.map((file, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 mx-auto mb-4 w-full max-w-xs"
          >
            <div className="flex items-center space-x-4">
              <img src="/icons/ppt.png" alt="File Icon" className="w-16 h-14" />
              <div className="text-center">
                <div
                  className="text-xl font-medium text-gray-800"
                  style={{ maxWidth: '150px', wordWrap: 'break-word' }}
                >
                  {/* Wrap the file name in a div */}
                  <div>{file.name}</div>
                </div>
                <p className="text-xl text-gray-600">
                  File Size: {formatFileSize(file.size)}
                </p>
              </div>
            </div>
          </div>
        ))}

        <button
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-2xl py-4 px-8  rounded-lg mx-auto m-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
