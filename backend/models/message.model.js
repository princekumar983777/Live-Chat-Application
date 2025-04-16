import mongoose from "mongoose";
import Conversation from "./conversation.model.js";

const messageaSchema = new mongoose.Schema({
    senderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiverID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message : {
        type: String,
        required: true,
    },
} , { timestamps: true });

const Message = mongoose.model("Message", messageaSchema);
export default Message;