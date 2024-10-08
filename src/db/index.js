import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB=async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongo connected !! DB HOST:${connectionInstance.connection.host}`);
        // console.log(`${connectionInstance}`);

        
    } catch (error) {
        console.log("mongo connection error!! ", error)
        process.exit(1)
    }
}
export default connectDB