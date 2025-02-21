const mongoose= require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;
        console.log("connect")
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });

        connection.on('error', (err) => {
            console.log('MongoDB connection error', err);
            process.exit(1);
        });

    } catch (error) {
        console.log('Something went wrong!');
        console.log(error);
        process.exit(1);
    }
};

module.exports= connect

