import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

const allowedOrigins = [
  "https://appointment-admin-system.onrender.com",
  "https://appointment-frontend-system.onrender.com", // ← Add this!
  "http://localhost:5173",
  "http://localhost:5174",
];

// CORS + Preflight handler (applies to all routes)
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  // Allow required methods
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  );

  // Allow headers used by your app. Include Authorization and token for compatibility
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, token"
  );

  // Allow cookies
  res.header("Access-Control-Allow-Credentials", "true");

  // OPTIONS preflight
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// minddlewares
app.use(express.json());

// api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log("Server Started", port);
});
