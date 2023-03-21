import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use("/api", productRouter);
app.use("/api", authRouter);
mongoose.connect("mongodb://localhost:27017/web17302");
export const viteNodeApp = app;
