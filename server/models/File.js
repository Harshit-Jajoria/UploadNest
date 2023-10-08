import mongoose from 'mongoose';
const FileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  file_size: {
    type: String,
    required: true,
  },
  file_type: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    required: true,
  },
  shortlink: {
    type: String,
    required: true,
  },
});

const FileModel = mongoose.model('File', FileSchema);

export default FileModel;
