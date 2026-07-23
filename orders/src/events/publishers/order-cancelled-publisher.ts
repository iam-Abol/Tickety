import { OrderCancelledEvent, Publisher, Subjects } from "@zayatickety/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
