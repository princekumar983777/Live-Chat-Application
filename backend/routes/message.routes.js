import express from "express";
import { isAuthenticated } from "../middleware/verifyToken.js";
import { sendMessage , getMessages } from "../controller/message.controller.js";



const router = express.Router();

router.get("/:id" , isAuthenticated, getMessages);
router.post("/send/:id",isAuthenticated, sendMessage);


export default router;