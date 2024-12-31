import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";

export const CreateOrUpdateUser = async (
  id,
  first_name,
  last_name,
  email_addresses,
  image_url
) => {
  try {
    // Validate input fields
    if (!id || !first_name || !last_name || !email_addresses || !email_addresses.length) {
      throw new Error("Missing required fields");
    }

    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_addresses[0].email_address,  
        }
      },
      { upsert: true, new: true } 
    );
    return user;

  } catch (error) {
    console.log(error, "Error could not create and update the user");
    throw error;  // Optionally rethrow the error
  }
};

export const deleteUser = async (id) => {
  try {
    if (!id) {
      throw new Error("Missing user ID");
    }

    await connect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log(error, "Error could not delete the user");
    throw error;  // Optionally rethrow the error
  }
};
