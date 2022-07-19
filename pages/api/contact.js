// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";
const mongoPassword = "Jj5eOVFGPU3mXvHP";
const mongoConnectionString = `mongodb+srv://webcatdev2:${mongoPassword}@cluster0.iea6c.mongodb.net/messages?retryWrites=true&w=majority`;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input!" });
    }

    const newMessage = { email, name, message };
    let client;
    try {
      client = await MongoClient.connect(mongoConnectionString);
    } catch (err) {
      return res.status(500).json({ message: "Something went wrong" });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      return res.status(500).json({ message: "Storing message failed!" });
    }

    res
      .status(201)
      .json({ message: "Succesfully stored the message.", data: newMessage });
  }
}
