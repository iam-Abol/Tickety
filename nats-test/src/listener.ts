import nats, { Message, Stan } from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedListener } from "./events/ticket-created-listener";
console.clear();

const stan = nats.connect("tickety", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});
stan.on("connect", () => {
  console.log("listener connected to nats");

  stan.on("close", () => {
    process.exit();
  });

  new TicketCreatedListener(stan).listen(); 
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
