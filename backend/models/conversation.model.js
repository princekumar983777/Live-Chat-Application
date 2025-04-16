import { time } from "console";
import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({

    participants : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
        }
    ],
    messages : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Message",
        }
    ]
    },
    {timestamp: true}
);

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;
// import mongoose from "mongoose";