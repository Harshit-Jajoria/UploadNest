import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import axios from 'axios';
import { BACKEND_URL } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbarr from '../component/Navbarr';

const fileIconMapping = {
  pdf: 'pdf.png',
  doc: 'doc.png',
  docx: 'doc.png',
  xlx: 'xlsx.png',
  jpeg: 'image.png',
  jpg: 'image.png',
  png: 'image.png',
  ppt: 'ppt.png',
  txt: 'txt.png',
};

const MyFiles = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const isAuth = Boolean(token);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();
  const [userFiles, setUserFiles] = useState([]);

  useEffect(() => {
    const getUserFilesData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/file/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res.data);
        setUserFiles(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserFilesData();
  }, [user._id, token]);

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

  const downloadFile = (url, filename) => {
    console.log(url, filename);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = blobUrl;
        a.setAttribute('download', filename);
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  };

  const handlePreview = (uri) => {
    navigate('/preview', { state: { uri } });
  };

  // Filter files based on search query
  const filteredFiles = userFiles.filter((file) =>
    file.filename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbarr setSearchQuery={setSearchQuery} />
      <div className="bg-black min-h-[81vh]">
        <div className="grid justify-center sm:grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredFiles.map((file, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 mx-auto mb-8 w-full max-w-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={`/icons/${fileIconMapping[file.filename.split('.').pop()]}`}
                  alt="File Icon"
                  className="w-16 h-14"
                />
                <div className="text-center">
                  <div
                    className="text-2xl font-medium text-gray-800"
                    style={{ maxWidth: '200px', wordWrap: 'break-word' }}
                  >
                    <div>{file.filename}</div>
                  </div>
                  <p className="text-xl text-gray-600">File Size: {file.file_size} KB</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-200 p-3 rounded-lg">
                    <span>{file.shortlink}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    copyToClipboard(file.shortlink);
                  }}
                  className="bg-blue-500 text-white ml-4 px-4 py-2 rounded-md"
                >
                  Copy URL
                </button>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => {
                    handlePreview(file.link);
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Preview
                </button>
                <button
                  onClick={() => {
                    downloadFile(file.link, file.filename);
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
