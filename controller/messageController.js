import ErrorHandler from "../middlewares/ErrorMiddleware.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req,res,next)=>{
    const {firstName,lastName,email,phone,message} = req.body;
    if(!firstName || !lastName || !email || !phone || !message){
        console.log('Some Fields Are Missing In Message Model...');
        return next(new ErrorHandler("Please Fill Full Form!",req.statusCode));
    }
    await Message.create({firstName,lastName,email,phone,message});
    res.status(201).json({
        message : "Message Sent Successfully",
        type : 'S',
        data : {}
    });
});