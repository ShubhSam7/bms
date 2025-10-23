import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
  port: 8080,
});

console.log("🟢 WebSocket server running on ws://localhost:8080");

server.on("connection", async (socket) => {
  console.log("✅ New client connected");

  try {
    const newUser = await client.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    console.log("🧑‍💻 User created:", newUser);
  } catch (err) {
    console.error("❌ Error creating user:", err);
  }

  socket.send("hi there im here only");
});
