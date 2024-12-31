import { EmailAddress } from "@clerk/nextjs/dist/types/server";
import User from "../models/user.model";
import {connect} from "../mongodb/mongoose"


export const CreateOrUpdateUser = async(
  id,
  first_name,
  last_name,
  email_addresses,
  image_url
)=>{
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      {clerkId:id},
      {
        $set: {
          firstName: first_name,
          lastName:last_name,
          profilePhoto:image_url,
          email:email_addresses[0].emai_address,
        }
      },
      {upSert:true , new: true}
    )
    return user;

  } catch (error) {
    console.log(error , "Error could not crate and update the user")
  }

}


export const deleteUser = async()=>{
  try {
    await connect()
    await User.findOneAndDelete({clerkId: id})
  } catch (error) {
    console.log(error , "Error could not delete the user")
  }
}