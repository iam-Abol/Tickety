import { Publisher, OrderCreatedEvent, Subjects } from "@zayatickety/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
