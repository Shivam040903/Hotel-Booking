import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";

const app = express();

// Connect to MongoDB
connectDB();
connectCloudinary();

// CORS middleware
app.use(cors());

// Clerk Webhook MUST receive raw body (only for this route)
app.use("/api/clerk", express.raw({ type: "*/*" }), clerkWebhooks);

// JSON body parser AFTER Clerk webhook
app.use(express.json());

// Clerk middleware (auth, etc.)
app.use(clerkMiddleware());

// Other routes
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));