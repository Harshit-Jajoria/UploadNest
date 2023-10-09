import React, { useEffect, useRef, useState } from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import axios from 'axios';
import { BACKEND_URL } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import uploadFile from '../firebase/uploadFile';
import Spinner from '../component/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fileIconMapping = {
  pdf: 'pdf.png',
  doc: 'doc.png',
  docx: 'doc.png',
  xlsx: 'xlx.png',
  jpeg: 'image.png',
  jpg: 'image.png',
  png: 'image.png',
  ppt: 'ppt.png',
  txt: 'txt.png',
};

const Home = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const isAuth = Boolean(token);

  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileValidationMessage, setFileValidationMessage] = useState('');
  const [loading,setLoading] = useState(false)
  const inputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = e.target.files; // Get the selected files
    if (files.length > 0) {
      const selectedFile = files[0];
      const allowedFileTypes = [
        'pdf',
        'doc',
        'xlsx',
        'jpeg',
        'jpg',
        'png',
        'docx',
        'ppt',
        'txt',
      ];
      const maxFileSize = 10 * 1024 * 1024; // 10MB

      if (!allowedFileTypes.includes(selectedFile.name.split('.').pop())) {
        setFileValidationMessage(
          'Invalid file type. Supported types: pdf, ppt,doc, docx xlsx, jpeg, jpg, png, txt.'
        );
        return;
      }

      if (selectedFile.size > maxFileSize) {
        setFileValidationMessage('File size exceeds 10MB limit.');
        return;
      }

      setSelectedFiles([selectedFile]);
      setFileValidationMessage('');
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
    if (selectedFiles.length === 0) {
      setFileValidationMessage('Please select a file.');
      return;
    }

    const selectedFile = selectedFiles[0];
    const date = new Date();
    const timestamp = date.toISOString();
    const fileName = `picture-${timestamp}-${selectedFile.name}`;

    try {
      setLoading(true);
      const imageUrl = await uploadFile(selectedFile, fileName);
      console.log(imageUrl);
      const res = await axios.post(`${BACKEND_URL}/add-file`, {
        userId: user._id,
        filename: selectedFile.name,
        file_size: selectedFile.size,
        file_type: selectedFile.type,
        link: imageUrl,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(false);
          toast.success('File Uploaded Successfully You Can Check in MyFiles', {
            position: 'top-center',
            pauseOnHover: true,
          });
      setSelectedFiles([]);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleImageDivClick = () => {
    inputRef.current.click();
  };

 

  return (
    <>
    {loading && <Spinner/>}
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

        {selectedFiles.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-4 mx-auto mb-4 w-full max-w-xs">
            <div className="flex items-center space-x-4">
              <img
                src={`/icons/${
                  fileIconMapping[selectedFiles[0].name.split('.').pop()]
                }`}
                alt="File Icon"
                className="w-16 h-14"
              />
              <div className="text-center">
                <div
                  className="text-xl font-medium text-gray-800"
                  style={{ maxWidth: '150px', wordWrap: 'break-word' }}
                >
                  {/* Wrap the file name in a div */}
                  <div>{selectedFiles[0].name}</div>
                </div>
                <p className="text-xl text-gray-600">
                  File Size: {formatFileSize(selectedFiles[0].size)}
                </p>
              </div>
            </div>
          </div>
        )}

        {fileValidationMessage && (
          <p className="text-red-500 text-center text-2xl">
            {fileValidationMessage}
          </p>
        )}

        <button
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-2xl py-4 px-8 rounded-lg mx-auto m-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <Footer />
      <ToastContainer />

    </>
  );
};

export default Home;
