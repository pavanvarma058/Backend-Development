const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (username) => {
  console.log(`Hello ${username} and welcome to events in node js`);
});

eventEmitter.once("pushNotify", () => {
  console.log("This event only run once");
});

// Emit the event
eventEmitter.emit("greet", "Yeswanth");
eventEmitter.emit("pushNotify");
eventEmitter.emit("pushNotify"); // This will not trigger the event again
eventEmitter.emit("greet", "Charlie");

const myListener = () => console.log("I am a test listener");
eventEmitter.on("test", myListener);

eventEmitter.emit("test");
eventEmitter.emit("test");
eventEmitter.removeListener("test", myListener);
eventEmitter.emit("test"); // This will not trigger the event as the listener has been removed
