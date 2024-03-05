import mongoose from "mongoose";

export const connect= async ()=>{

    try {

        const connection=await mongoose.connect(`mongodb://127.0.0.1:27017/hiveHub`)
        console.log(`🍃 Database Established connection with MongoDB`);
        
        
    } catch (error:any) {
        console.error(`❌ Database Connection failed`);
        console.error(error.message); 
    }
}