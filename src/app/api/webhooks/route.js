import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { CreateOrUpdateUser, deleteUser } from '@/lib/actions/user'
import { clerkClient } from '@clerk/nextjs/server';

export async function POST(req) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) 
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data
  const eventType = evt.type

  if (eventType === "user.created" || eventType === "user.updated") {
    // Check for valid env and data
    if (!env?.data) {
      console.log("Invalid data for event type", eventType);
      return new Response("Invalid data", { status: 400 });
    }
  
    const { first_name, last_name, image_url, email_addresses } = env.data;
  
    try {
      const user = await CreateOrUpdateUser(id, first_name, last_name, email_addresses, image_url);
  
      if (user) {
        if (eventType === "user.created") {
          try {
            await clerkClient.users.updateUserMetaData(id, {
              publicMetaData: {
                userMongoId: user.id
              }
            });
          } catch (error) {
            console.error(error, "Could not update the meta user testing for deployment");
          }
        }
      } else {
        console.log("User creation or update failed.");
      }
    } catch (error) {
      console.error(error, "Could not create or update the user.");
    }
  }
  
  if (eventType === "user.deleted") {
    try {
      const deletionResult = await deleteUser(id);
  
      // Return success response if user is deleted
      if (deletionResult) {
        return new Response("User deleted successfully", { status: 200 });
      } else {
        console.log("Failed to delete user with id:", id);
        return new Response("User not found", { status: 404 });
      }
    } catch (error) {
      console.error(error, "Error: Could not delete user.");
      return new Response("Error: Could not delete user", { status: 500 });
    }
  }

  return new Response('Webhook received', { status: 200 })
}