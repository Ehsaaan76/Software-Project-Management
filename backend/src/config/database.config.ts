import mongoose from "mongoose"
import  { config } from "./app.config"

const connectDatabase = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error connecting to Database");
        process.exit(1);
    }
}

export default connectDatabase;