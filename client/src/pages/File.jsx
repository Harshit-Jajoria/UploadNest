import { useEffect, useState } from 'react';
import uploadFile from '../firebase/uploadFile';


function File() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const files = e.target.files; // Get the selected files
    if (files.length > 0) {
      console.log('Uploaded Files:', files);

      setSelectedFile(files[0]);
    }
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const date = new Date();
      const timestamp = date.toISOString();
      const fileName = `picture-${timestamp}-${selectedFile.name}`;
      
      try {
        const res = await uploadFile(selectedFile, fileName);
        console.log(res);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <div>
      <input
        type="file"
        id="myFile"
        name="filename"
        onChange={handleFileUpload}
      />
      <button onClick={handleSubmit}>Submit</button>

      {selectedFile && (
        <div>
          <p>Selected File:</p>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>File Size (in bytes): {selectedFile.size}</p>

          {selectedFile.type.startsWith('image/') ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt={selectedFile.name}
              width="500"
              height="400"
            />
          ) : selectedFile.type.startsWith('video/') ? (
            <video
              controls
              width="500"
              height="400"
            >
              <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
            </video>
          ) : selectedFile.type === 'application/pdf' ? (
            <object
              data={URL.createObjectURL(selectedFile)}
              type="application/pdf"
              width="500"
              height="400"
            >
              PDF Viewer
            </object>
          ) : (
            <p>This file type is not supported for preview.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default File;