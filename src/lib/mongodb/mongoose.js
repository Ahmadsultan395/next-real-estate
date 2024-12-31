import mongoose from "mongoose";

let initialize = false;

export const connect = async ()=>{
  mongoose.set('strictQuery', true);

  if (initialize) {
    console.log("mongodb already connected ");
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL , {
      dbName: 'next-estate', 
      useNewUrlParser :true,
      useUnifiedTopology:true
    })
    initialize = true;
    console.log("mongobd connected successfully")
    
  } catch (error) {
    console.log(error , "mongoDb connection error")
  }
}