import express from 'express';
import { isAuthenticated } from '../middleware/verifyToken.js';
import { getUserForSideBar } from '../controller/user.controller.js';

const router = express.Router();

router.get('/', isAuthenticated, getUserForSideBar);

export default router;