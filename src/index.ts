import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express()

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,PATCH',
}));
app.use(express.json())

//Routes

//Connect to database

// Error handling middleware for not found routes
app.use("*", ( req:Request, res:Response, next:NextFunction) => {
    res.status(404).json({ message: "API not found" });
});

// Global error handler
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    console.error(err);
    res.status(500).json({ message: "There is something wrong with your API" });
});

// Start server
app.listen(process.env.PORT || 4000, () =>
    console.log(`Listening on port ${process.env.PORT || 4000}`)
);