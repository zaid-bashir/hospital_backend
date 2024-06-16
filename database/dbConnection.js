import mongoose from 'mongoose';

const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, { dbName: 'MERN_HOSPITAL_MANAGEMENT_SYSTEM' })
        .then(() => console.log("💻 Mondodb Database Connected"))
        .catch(err => {
            console.log('Error Occured While Connecting Database')
            return console.error(err);
        });
}

export default dbConnection;