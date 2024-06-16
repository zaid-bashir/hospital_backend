import app from "./app.js";

//Listening To Server
app.listen(process.env.PORT,()=>{
    console.log(`Server Listening On Port ${process.env.PORT}`);
});