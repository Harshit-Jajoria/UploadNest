import shortid from 'shortid';
import FileModel from '../models/File.js';

// Get
export const getFiles = async (req, res) => {
  try {
    const files = await FileModel.find();
    res.status(200).json(files);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Get files by user ID
export const getFilesByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const files = await FileModel.find({ userId }); // Filter files by userId
    res.status(200).json(files);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Add a new file
export const addFile = async (req, res) => {
  const { userId, filename, file_size, file_type, link } = req.body;
  console.log(userId, filename, file_size, file_type, link);

  try {
    const shortID = shortid();
    const newFile = new FileModel({
      userId,
      filename,
      file_size,
      file_type,
      link,
      shortlink: `https://upload-nest-xss8.vercel.app/${shortID}`,
      shortId: shortID,
    });

    await newFile.save();

    res.status(201).json(newFile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get url using short url

export const getLink = async (req, res) => {
  const { shortId } = req.params;

  try {
    const file = await FileModel.findOne({ shortId }); 
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Redirect to the stored link URL
    return res.redirect(file.link);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
