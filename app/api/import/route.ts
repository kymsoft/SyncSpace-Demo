// Import necessary modules and dependencies
import { db } from "../../../lib/db";
import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";

// Define the API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if the request method is 'POST'
    if (req.method === "POST") {
        // Destructure the body of the request
        const { name, description } = req.body;

        // Generate a UUID for the 'tag' field
        const spaceTag = uuidv4();

        try {
            // Create a new space in the database
            await db.space.create({
                data: {
                    name,
                    description,
                    tag: spaceTag,
                },
            });

            // Send a success response
            res.status(200).json({ message: "Space Created" });
        } catch (error) {
            // Log an error if something goes wrong
            console.log("Something went wrong", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        // If the request method is not 'POST', send a method not allowed response
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
