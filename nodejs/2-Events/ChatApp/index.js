const ChatRoom = require("./chatRoom.js");
const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});

chat.on("Message", (user, message) => {
  console.log(`${user}: ${message}`);
});

chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

// simulating the chat
chat.join("Charlie");
chat.join("Alan");

chat.sendMessage("Alan", "Hey Charlie, Hello to everyone");
chat.sendMessage("Charlie", "Hello Alan, and Hello everyone");

chat.leave("Alan");
chat.sendMessage("Alan", "This message wont be sent");
chat.leave("Charlie");
