import express from 'express';
import {config} from 'dotenv';
const app = express();

//Loading Config.env File Path To Start Loading .env File Variables.
config({path : './config/config.env'})

export default app;