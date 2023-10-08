import express from 'express';
import { addFile, getFiles, getFilesByUserId, getLink } from '../controllers/file.js';
import { verifyToken } from '../middleware/auth.js';


const router = express.Router();

/* READ */
router.get('/file', getFiles);

//Get url using short url
router.get('/:shortId', getLink);


router.get('/file/:userId', getFilesByUserId);

/* POST */
router.post('/add-file', addFile);


export default router;
