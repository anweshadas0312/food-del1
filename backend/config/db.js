import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://anwesharimi123:33858627@cluster0.uaeydy8.mongodb.net/food-del1').then(()=>console.log("DB Connected"));
    
};