import express from 'express';
import { sendMessage } from '../controller/messageController.js';

//Getting Router Instance
const router = express.Router();

router.post('/sendMessage',sendMessage);

export default router;