import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dbConnection from './database/dbConnection.js';


//Getting Express App Instance
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

// Purpose: This middleware parses the Cookie header and populates req.cookies with an object keyed by cookie names.
// Usage: It makes it easy to read cookies sent by the client in HTTP requests. You typically use it when you need to manage user sessions, preferences, or any other data stored in cookies.
app.use(cookieParser())

// Purpose: This middleware parses incoming requests with JSON payloads and makes the parsed data available under req.body.
// Usage: It is useful for handling API requests where the client sends data in JSON format. It simplifies access to the request data within your route handlers.
app.use(express.json())

// Purpose: This middleware parses incoming requests with URL-encoded payloads and makes the parsed data available under req.body. The { extended: true } option allows for rich objects and arrays to be encoded into the URL-encoded format using the qs library.
// Usage: It is used for handling form submissions. When a form is submitted with application/x-www-form-urlencoded encoding, this middleware helps extract the data into a JavaScript object.
app.use(express.urlencoded({ extended: true }))

//Connecting MongoDB Database
dbConnection();


export default app;