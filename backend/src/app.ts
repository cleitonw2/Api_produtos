import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import dotenv from "dotenv"
import cors from "cors";
import { AppError } from "./middlewares/AppError"
import { createConnection } from "typeorm";

dotenv.config();

createConnection();

const app = express();

app.use(express.json());

app.use(cors())

app.use(router);

app.use(
    (err: Error,
        request: Request,
        response: Response,
        next: NextFunction) => {

        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message
            });
        }

        return response.status(500).json({
            status: "Error",
            message: `Internal server error ${err.message}`
        });
    });

export { app }