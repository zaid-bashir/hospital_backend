import app from "./app.js";
import cloudinary from "cloudinary";

//Setting Up Cloudinary Server
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//Listening To Server
app.listen(process.env.PORT, () => {
    console.log(`Server Listening On Port ${process.env.PORT}`);
});