import mongoose from "mongoose";


const userSchema = new mongoose.schema(
  {
    ClerkId: {
      type:String,
      required:true,
      unique:true
    },
    firstName: {
      type:String,
      required:true,
    },
    lastName: {
      type:String,
      required:true,
    },
    email: {
      type:String,
      required:true,
      unique:true
    },
    profilePhoto: {
      type:String,
      required:true,
    }
  }, {timestamps :true}
)


const User = mongoose.modles.User || mongoose.model('User' , userSchema);
export default User;