import mongoose from 'mongoose';


const connectDB = async () => {
    const mongoUrl = process.env.MONGO_URI! ;

    try {
        await mongoose.connect(mongoUrl);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};

export default connectDB;
