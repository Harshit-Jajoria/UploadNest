import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from './config';

const uploadFile = async (file, path) => {
  return new Promise((resolve, reject) => {
    try {
      const storageRef = ref(storage, path);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // You can monitor the upload progress here if needed
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //   console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error('Upload error:', error);
          resolve('');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((err) => {
              console.error('Error getting download URL:', err);
              resolve('');
            });
        }
      );
    } catch (error) {
      console.error('Upload error:', error);
      resolve('');
    }
  });
};

export default uploadFile;
