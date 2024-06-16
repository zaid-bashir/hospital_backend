import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
const app = express();

//Loading Config.env File Path To Start Loading .env File Variables.
config({ path: './config/config.env' })

//Adding CORS For Connecting FrontEnd and Dashboard With Backend.
app.use(cors(
    {
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
        credentials: true,
    }
));

export default app;