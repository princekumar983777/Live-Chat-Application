import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res , next) => {
    try{
        const {message } = req.body;
        const { id : receiverID} = req.params;
        const senderID = req.user.id;

        let conversation = await Conversation.findOne({
            participants:{
                $all: [senderID, receiverID]
            }
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants : [senderID, receiverID],
            })
        }

        const newMessage = await Message.create({
            senderID,
            receiverID,
            message,
        })
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await Promise.all([
            conversation.save(),
            newMessage.save(),
        ])

        // Socket.io logic to emit the message to the receiver
        res.status(200).json({
            message: "Message sent successfully",
            newMessage, // Remember not just the message return
        })
    } catch (error){
        next(error);
    }

}

export const getMessages = async (req, res, next) => { 
    try{
        const {id : userToMessage } = req.params;
        const senderID = req.user.id;

        const conversation = await Conversation.findOne({
            participants:{
                $all: [senderID, userToMessage]
            }
        }).populate("messages")

        if(!conversation){
            return res.status(200).json([]);
        }

        const messages = conversation.messages 
        res.status(200).json(messages)
    } catch (error) {
        next(error);
    }
}
