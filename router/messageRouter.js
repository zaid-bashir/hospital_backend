import express from 'express';
import { sendMessage,getAllMessages } from '../controller/messageController.js';
import {isAdminAuthenticated} from '../middlewares/auth.js';

//Getting Router Instance
const router = express.Router();

router.post('/sendMessage',sendMessage);
router.get("/getAllMessages", isAdminAuthenticated, getAllMessages);

export default router;