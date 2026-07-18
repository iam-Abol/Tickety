import { Publisher, Subjects, TicketUpdatedEvent } from "@zayatickety/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
