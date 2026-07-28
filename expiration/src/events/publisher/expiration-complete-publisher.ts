import { Publisher, Subjects, ExpirationComplete } from "@zayatickety/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationComplete> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
