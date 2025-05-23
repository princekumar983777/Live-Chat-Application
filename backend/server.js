import express from "express";;
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { app , server } from "./socket/socket.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI; // Use the environment variable for MongoDB URI
if (!MONGO_URI) {
    console.error("MongoDB URI not provided in .env file");
    process.exit(1);
}

mongoose.connect(MONGO_URI)  // Mongoose 8.x doesn't need useNewUrlParser and useUnifiedTopology
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON requests
app.use(cookieParser()); // Middleware to parse cookies

app.get("/", (req, res) => {
    res.send("Hello World");
});

// Import Routes
import authRoutes from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoute from "./routes/user.routes.js";


app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoute);
app.use("/api/user", userRoute);

server.listen(PORT,  () => {
    console.log("Server is running on port ", PORT);
});

// erro handling
app.use((err , req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})
